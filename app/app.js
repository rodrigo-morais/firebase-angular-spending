'use strict';

import spentController from "spent/controllers/spentController";

let app = angular.module('myApp', ['ngRoute']);

app.config([
  '$routeProvider',
  '$locationProvider',
  ($routeProvider, $locationProvider) => {
      $routeProvider.
        when('/spent', {
            templateUrl: 'app/spent/templates/spent.html',
            controller: spentController
        }).
        otherwise({
            templateUrl: 'app/spent/templates/spent.html',
            controller: spentController
        });
        /*$locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });*/
    }
]);

return app;