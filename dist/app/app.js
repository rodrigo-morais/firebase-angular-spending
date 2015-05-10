define(["exports", "angular", "angular-route", "angularAMD", "firebase", "angularfire"], function (exports, _angular, _angularRoute, _angularAMD, _firebase, _angularfire) {
    /*jslint browser:true */
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var angular = _interopRequire(_angular);

    var ngRoute = _interopRequire(_angularRoute);

    var angularAMD = _interopRequire(_angularAMD);

    var firebase = _interopRequire(_firebase);

    var angularfire = _interopRequire(_angularfire);

    var app = angular.module("myApp", ["ngRoute", "firebase"]);

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

    return angularAMD.bootstrap(app);
});