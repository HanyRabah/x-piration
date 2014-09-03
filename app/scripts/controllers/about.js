'use strict';

/**
 * @ngdoc function
 * @name designersListApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the designersListApp
 */
angular.module('designersListApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
