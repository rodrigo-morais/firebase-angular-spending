define(["exports", "app", "spent/services/spentService", "moment"], function (exports, _app, _spentServicesSpentService, _moment) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var app = _interopRequire(_app);

    var SpentService = _spentServicesSpentService.SpentService;

    var moment = _interopRequire(_moment);

    var SpentController = (function () {
        function SpentController($rootScope, spentService) {
            _classCallCheck(this, SpentController);

            this._service = spentService;
            this.date = "";
            this.item = "";
            this.value = "";

            $rootScope.$broadcast("change-menu", { position: 0 });
        }

        _createClass(SpentController, {
            _clean: {
                value: function _clean() {
                    this.date = "";
                    this.item = "";
                    this.value = "";
                }
            },
            saveSpent: {
                value: function saveSpent() {
                    this.date = moment(this.date).format("YYYY-MM-DD");
                    this._service.post(this.date, this.item, this.value);

                    this._clean();
                }
            }
        });

        return SpentController;
    })();

    SpentController.$inject = ["$rootScope", "spentService"];

    app.controller("spentController", SpentController).service("spentService", SpentService);

    exports.SpentController = SpentController;
});