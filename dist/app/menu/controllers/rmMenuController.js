define(["exports", "module"], function (exports, module) {
    "use strict";

    var rmMenuController = function ($scope) {
        $scope.menus = [{
            text: "Add Spent - 1",
            link: "/#spent",
            selected: true
        }, {
            text: "Daily Spendings - 2",
            link: "/#daily",
            selected: false
        }, {
            text: "Monthly Spendings",
            link: "/#monthly",
            selected: false
        }];

        $scope.select = function (menu) {
            $scope.menus.forEach(function (_menu) {
                _menu.selected = false;
            });
            menu.selected = true;
        };
    };

    rmMenuController.$inject = ["$scope"];

    module.exports = rmMenuController;
});