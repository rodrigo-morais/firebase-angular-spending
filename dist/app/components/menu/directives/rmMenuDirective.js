define(["exports", "module", "components/menu/controllers/rmMenuController"], function (exports, module, _componentsMenuControllersRmMenuController) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var rmMenuController = _interopRequire(_componentsMenuControllersRmMenuController);

    var rmMenuDirective = function () {

        var html = "app/components/menu/templates/menu.html";

        return {
            restrict: "E",
            templateUrl: html,
            css: "app/components/menu/css/menu.css",
            replace: true,
            controller: rmMenuController,
            link: function link(scope, element, attrs, controller) {}
        };
    };

    rmMenuDirective.$inject = [];

    module.exports = rmMenuDirective;
});