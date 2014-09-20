'use strict';

/**
 * @ngdoc overview
 * @name designersListApp
 * @description
 * # designersListApp
 *
 * Main module of the application.
 */
angular
  .module('designersListApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/panel', {
        templateUrl: 'views/panel.html',
        controller: 'MainCtrl'
      })
      .when('/storage', {
        templateUrl: 'storage',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
