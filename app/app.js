/*jslint browser:true */
'use strict';

import angular from 'angular';
import ngRoute from 'angular-route';
import angularAMD from 'angularAMD';
import firebase from 'firebase';
import angularfire from 'angularfire';
import rmMenuDirective from "components/menu/directives/rmMenuDirective";
import angularCss from 'angularCSS';

var app = angular.module('myApp', ['ngRoute', 'firebase','door3.css']);

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

app.directive('rmMenu', [rmMenuDirective]);

return angularAMD.bootstrap(app);