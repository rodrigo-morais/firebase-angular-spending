define(["exports", "spent/services/spentService", "spent/controllers/spentController"], function (exports, _spentServicesSpentService, _spentControllersSpentController) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var spentService = _interopRequire(_spentServicesSpentService);

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

    app.factory("spentService", spentService);

    return app;
});