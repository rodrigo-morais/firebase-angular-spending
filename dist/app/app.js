define(["exports", "spent/controllers/spentController", "spent/services/spentService"], function (exports, _spentControllersSpentController, _spentServicesSpentService) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var app = angular.module("myApp", ["ngRoute"]);

    var spentController = _interopRequire(_spentControllersSpentController);

    var spentService = _interopRequire(_spentServicesSpentService);

    app.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
        $routeProvider.when("/spent", {
            templateUrl: "app/spent/templates/spent.html",
            controller: spentController
        }).otherwise({
            templateUrl: "app/spent/templates/spent.html",
            controller: spentController
        });
        /*$locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });*/
    }]);

    app.factory("spentService", spentService);

    return app;
});