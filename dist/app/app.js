define(["exports", "spent/services/spentService", "spent/controllers/spentController"], function (exports, _spentServicesSpentService, _spentControllersSpentController) {
    "use strict";

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

    return app;
});