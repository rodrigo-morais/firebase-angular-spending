define(["exports", "angular", "angular-route", "angularAMD", "firebase", "angularfire", "components/menu/directives/rmMenuDirective", "angularCSS"], function (exports, _angular, _angularRoute, _angularAMD, _firebase, _angularfire, _componentsMenuDirectivesRmMenuDirective, _angularCSS) {
    /*jslint browser:true */
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var angular = _interopRequire(_angular);

    var ngRoute = _interopRequire(_angularRoute);

    var angularAMD = _interopRequire(_angularAMD);

    var firebase = _interopRequire(_firebase);

    var angularfire = _interopRequire(_angularfire);

    var rmMenuDirective = _interopRequire(_componentsMenuDirectivesRmMenuDirective);

    var angularCss = _interopRequire(_angularCSS);

    var app = angular.module("myApp", ["ngRoute", "firebase", "door3.css"]);

    app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider.when("/spent", angularAMD.route({
            templateUrl: "app/spent/templates/spent.html",
            controller: "spentController",
            controllerUrl: "spent/controllers/spentController",
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

    app.directive("rmMenu", [rmMenuDirective]);

    return angularAMD.bootstrap(app);
});