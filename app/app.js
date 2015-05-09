/*jslint browser:true */
'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import { SpentService } from "spent/services/spentService";
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

app.service('spentService', SpentService);

angular.bootstrap(document, ['myApp']);

return app;