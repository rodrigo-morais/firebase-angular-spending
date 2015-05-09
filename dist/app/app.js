define(["exports", "angular", "angular-route", "spent/services/spentService", "spent/controllers/spentController"], function (exports, _angular, _angularRoute, _spentServicesSpentService, _spentControllersSpentController) {
    /*jslint browser:true */
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var angular = _interopRequire(_angular);

    var ngRoute = _interopRequire(_angularRoute);

    var SpentService = _spentServicesSpentService.SpentService;
    var SpentController = _spentControllersSpentController.SpentController;

    var app = angular.module("myApp", ["ngRoute"]);

    app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider.when("/spent", {
            templateUrl: "app/spent/templates/spent.html",
            controller: SpentController,
            controllerAs: "vm"
        }).otherwise({
            templateUrl: "app/spent/templates/spent.html",
            controller: SpentController,
            controllerAs: "vm"
        });
        /*$locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });*/
    }]);

    app.service("spentService", SpentService);

    angular.bootstrap(document, ["myApp"]);

    return app;
});