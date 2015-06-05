define(["exports", "angular", "angular-route", "angularAMD", "firebase", "angularfire", "menu/controllers/rmMenuController", "angularCSS", "angularRightMenu"], function (exports, _angular, _angularRoute, _angularAMD, _firebase, _angularfire, _menuControllersRmMenuController, _angularCSS, _angularRightMenu) {
    /*jslint browser:true */
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var angular = _interopRequire(_angular);

    var ngRoute = _interopRequire(_angularRoute);

    var angularAMD = _interopRequire(_angularAMD);

    var firebase = _interopRequire(_firebase);

    var angularfire = _interopRequire(_angularfire);

    var rmMenuController = _interopRequire(_menuControllersRmMenuController);

    var angularCss = _interopRequire(_angularCSS);

    var rmRightMenu = _interopRequire(_angularRightMenu);

    var app = angular.module("myApp", ["ngRoute", "firebase", "door3.css", "rmRightMenu"]);

    app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider.when("/spent", angularAMD.route({
            templateUrl: "app/spent/templates/spent.html",
            controller: "spentController",
            controllerUrl: "spent/controllers/spentController",
            controllerAs: "vm"
        })).when("/daily", angularAMD.route({
            templateUrl: "app/daily/templates/daily.html",
            controller: "dailyController",
            controllerUrl: "daily/controllers/dailyController",
            controllerAs: "vm"
        })).when("/monthly", angularAMD.route({
            templateUrl: "app/monthly/templates/monthly.html",
            controller: "monthlyController",
            controllerUrl: "monthly/controllers/monthlyController",
            controllerAs: "vm"
        })).otherwise(angularAMD.route({
            templateUrl: "app/spent/templates/spent.html",
            controller: "spentController",
            controllerUrl: "spent/controllers/spentController",
            controllerAs: "vm"
        }));
        /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });*/
    }]);

    app.controller("menuController", rmMenuController);

    return angularAMD.bootstrap(app);
});