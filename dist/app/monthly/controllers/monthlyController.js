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
        function MonthlyController(monthlyService) {
            _classCallCheck(this, MonthlyController);

            this._service = monthlyService;
            this.filter = {
                month: new Date(Date.now())
            };
            this.monthFilter = moment(new Date(Date.now())).format("MM");
        }

        _createClass(MonthlyController, {
            findSpendings: {
                value: function findSpendings(filter) {
                    this.monthFilter = moment(filter.month).format("MM");

                    console.log(this.monthFilter);
                }
            }
        });

        return MonthlyController;
    })();

    MonthlyController.$inject = ["monthlyService"];

    app.controller("monthlyController", MonthlyController).service("monthlyService", MonthlyService);

    exports.MonthlyController = MonthlyController;
});