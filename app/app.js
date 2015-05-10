/*jslint browser:true */
'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import angularAMD from 'angularAMD';

var app = angular.module('myApp', ['ngRoute']);

app.config([
  '$routeProvider',
  '$locationProvider',
  ($routeProvider, $locationProvider) => {
    $routeProvider.
        when('/spent',  angularAMD.route({
            templateUrl: 'app/spent/templates/spent.html',
            controller: 'spentController',
            controllerUrl: 'spent/controllers/spentController',
            controllerAs: 'vm'
        })).
        otherwise(angularAMD.route({
            templateUrl: 'app/spent/templates/spent.html',
            controller: 'spentController',
            controllerUrl: 'spent/controllers/spentController',
            controllerAs: 'vm'
        }));
        /*$locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });*/
   }
]);

return angularAMD.bootstrap(app);