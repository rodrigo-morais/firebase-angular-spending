define(["exports", "app", "monthly/services/monthlyService"], function (exports, _app, _monthlyServicesMonthlyService) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var app = _interopRequire(_app);

    var monthlyService = _monthlyServicesMonthlyService.monthlyService;

    var MonthlyController = function MonthlyController(monthlyService) {
        _classCallCheck(this, MonthlyController);

        this._service = monthlyService;
    };

    MonthlyController.$inject = ["monthlyService"];

    app.controller("monthlyController", MonthlyController).service("monthlyService", monthlyService);

    exports.MonthlyController = MonthlyController;
});