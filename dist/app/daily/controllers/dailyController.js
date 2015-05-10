define(["exports", "app", "daily/services/dailyService"], function (exports, _app, _dailyServicesDailyService) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var app = _interopRequire(_app);

    var dailyService = _dailyServicesDailyService.dailyService;

    var DailyController = function DailyController(dailyService) {
        _classCallCheck(this, DailyController);

        this._service = dailyService;
    };

    DailyController.$inject = ["dailyService"];

    app.controller("dailyController", DailyController).service("dailyService", dailyService);

    exports.DailyController = DailyController;
});