define(["exports", "spent/controllers/spentController"], function (exports, _spentControllersSpentController) {
    "use strict";

    var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

    var spentController = _interopRequire(_spentControllersSpentController);

    var app = angular.module("myApp", ["ngRoute"]);

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

    return app;
});