define(["exports", "app", "monthly/services/monthlyService", "moment"], function (exports, _app, _monthlyServicesMonthlyService, _moment) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var app = _interopRequire(_app);

    var MonthlyService = _monthlyServicesMonthlyService.MonthlyService;

    var moment = _interopRequire(_moment);

    var MonthlyController = (function () {
        function MonthlyController($rootScope, monthlyService) {
            _classCallCheck(this, MonthlyController);

            this._service = monthlyService;

            var _year = null;

            var _years = [];
            for (var year = 1999; year <= 2030; year = year + 1) {
                _years.push({
                    name: year
                });
                if (year === new Date(Date.now()).getFullYear()) {
                    _year = _years[_years.length - 1];
                }
            }

            this.filter = {
                year: _year,
                years: _years
            };

            this.months = [];
            this.total = 0;
            this.average = 0;

            this.findSpendings(this.filter);

            $rootScope.$broadcast("change-menu", { position: 2 });
        }

        _createClass(MonthlyController, {
            _calculateMonths: {
                value: function _calculateMonths(spendings) {
                    var _this = this;

                    for (var index = 0; index < spendings.length; index = index + 1) {
                        (function (index) {
                            var spent = spendings[index],
                                year = new Date(spent.date).getFullYear(),
                                numMonth = new Date(spent.date).getMonth() + 1,
                                month = _this.months.filter(function (_month) {
                                return _month.year === year && _month.month === numMonth;
                            });

                            if (month.length > 0) {
                                month[0].value = month[0].value + parseFloat(spent.value);
                                month[0].average = month[0].value / month[0].days;
                            } else {
                                month = {
                                    year: year,
                                    month: numMonth,
                                    monthName: moment(new Date(spent.date)).format("MMMM"),
                                    days: new Date(year, numMonth, 0).getDate(),
                                    value: parseFloat(spent.value),
                                    average: parseFloat(spent.value) / new Date(year, numMonth, 0).getDate()
                                };

                                _this.months.push(month);
                            }
                        })(index);
                    }
                }
            },
            _calculateTotalByYear: {
                value: function _calculateTotalByYear(year) {
                    var months = this.months.map(function (month) {
                        return parseFloat(month.value);
                    });

                    var totals = {
                        total: 0,
                        months: this.months.length,
                        average: 0
                    };

                    if (months.length > 0) {
                        totals.total = months.reduce(function (previousValue, currentValue, index, array) {
                            return previousValue + currentValue;
                        });

                        totals.average = totals.total / totals.months;
                    }

                    return totals;
                }
            },
            findSpendings: {
                value: function findSpendings(filter) {
                    var start = moment(new Date(filter.year.name, 0, 1)).format("YYYY-MM-DD"),
                        end = moment(new Date(filter.year.name, 12, 0)).format("YYYY-MM-DD"),
                        scope = this;

                    this.months = [];
                    this.spendings = this._service.get(start, end);

                    this.spendings.$loaded().then(function (_spendings) {
                        scope._calculateMonths(_spendings);

                        var totals = scope._calculateTotalByYear(filter.year.name);
                        scope.total = totals.total;
                        scope.average = totals.average;
                    })["catch"](function (error) {
                        console.log("Error:", error);
                    });
                }
            }
        });

        return MonthlyController;
    })();

    MonthlyController.$inject = ["$rootScope", "monthlyService"];

    app.controller("monthlyController", MonthlyController).service("monthlyService", MonthlyService);

    exports.MonthlyController = MonthlyController;
});