define(["exports", "app", "daily/services/dailyService", "moment"], function (exports, _app, _dailyServicesDailyService, _moment) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var app = _interopRequire(_app);

    var DailyService = _dailyServicesDailyService.DailyService;

    var moment = _interopRequire(_moment);

    var DailyController = (function () {
        function DailyController(dailyService) {
            _classCallCheck(this, DailyController);

            this._service = dailyService;
            this.filter = {
                date: new Date(Date.now())
            };
            this.dateFilter = moment(new Date(Date.now())).format("YYYY-MM-DD");
            this.spendings = [];
        }

        _createClass(DailyController, {
            findSpendings: {
                value: function findSpendings(filter) {
                    this.dateFilter = moment(filter.date).format("YYYY-MM-DD");

                    this.spendings = this._service.get(this.dateFilter);

                    this.spendings.$loaded().then(function (x) {
                        console.log(x.length); // true
                    })["catch"](function (error) {
                        console.log("Error:", error);
                    });
                }
            }
        });

        return DailyController;
    })();

    DailyController.$inject = ["dailyService"];

    app.controller("dailyController", DailyController).service("dailyService", DailyService);

    exports.DailyController = DailyController;
});