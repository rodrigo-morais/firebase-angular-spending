define(["exports", "../../config"], function (exports, _config) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var config = _interopRequire(_config);

    var MonthlyService = (function () {
        function MonthlyService($firebaseArray) {
            _classCallCheck(this, MonthlyService);

            this._firebaseArray = $firebaseArray;
            this._config = config;
        }

        _createClass(MonthlyService, {
            get: {
                value: function get(start, end) {
                    var ref = new Firebase(this._config.url).orderByChild("date").startAt(start).endAt(end);

                    var spendings = this._firebaseArray(ref);

                    return spendings;
                }
            }
        });

        return MonthlyService;
    })();

    MonthlyService.$inject = ["$firebaseArray"];

    exports.MonthlyService = MonthlyService;
});