'use strict';

import spentService from "spent/services/spentService";
import { SpentController } from "spent/controllers/spentController";

let app = angular.module('myApp', ['ngRoute']);

app.config([
  '$routeProvider',
  '$locationProvider',
  ($routeProvider, $locationProvider) => {
      $routeProvider.
        when('/spent', {
            templateUrl: 'app/spent/templates/spent.html',
            controller: SpentController,
            controllerAs: 'vm'
        }).
        otherwise({
            templateUrl: 'app/spent/templates/spent.html',
            controller: SpentController,
            controllerAs: 'vm'
        });
        /*$locationProvider.html5Mode({
          enabled: true,
          requireBase: false
        });*/
    }
]);

app.factory('spentService', spentService);

return app;