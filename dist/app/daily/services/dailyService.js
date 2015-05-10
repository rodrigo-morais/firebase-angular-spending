define(["exports", "../../config"], function (exports, _config) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var config = _interopRequire(_config);

    var DailyService = function DailyService($firebaseArray) {
        _classCallCheck(this, DailyService);

        this._firebaseArray = $firebaseArray;
        this._config = config;
    };

    DailyService.$inject = ["$firebaseArray"];

    exports.DailyService = DailyService;
});