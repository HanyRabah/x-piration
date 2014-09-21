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
        'firebase',
        'wu.masonry'
    ]).filter('nospace', function() {
        return function(value) {
            return (!value) ? '' : value.replace(/ /g, '');
        };
    })
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/submit', {
                templateUrl: 'views/submit.html',
                controller: 'MainCtrl'
            })
            .when('/panel', {
                templateUrl: 'views/panel.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });