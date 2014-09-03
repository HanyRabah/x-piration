'use strict';

/**
 * @ngdoc function
 * @name designersListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the designersListApp
 */
angular.module('designersListApp')
    .controller('MainCtrl', function($scope, jsonFactory) {
        $scope.categories = {};
        jsonFactory.getInspirationStuff()
            .then(function(data) {
                $scope.categories = data;
            }, function(error) {
                console.error(error);
            });

           $scope.items = [
           {url: 'http://google.com', name: 'Google'},
           {url: 'http://google.com', name: 'yahoo'},
           {url: 'http://google.com', name: 'bengo'},
           {url: 'http://google.com', name: 'hany'},
           {url: 'http://google.com', name: 'omar'}
           ]

    });