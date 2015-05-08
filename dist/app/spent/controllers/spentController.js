define(["exports"], function (exports) {
    "use strict";

    var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var SpentController = (function () {
        function SpentController(spentService) {
            _classCallCheck(this, SpentController);

            this._service = spentService;
            this.date = "";
            this.item = "";
            this.value = "";
        }

        _createClass(SpentController, {
            saveSpent: {
                value: function saveSpent() {
                    this._service.post(this.date, this.item, this.value);
                }
            }
        });

        return SpentController;
    })();

    SpentController.$inject = ["spentService"];

    exports.SpentController = SpentController;
});