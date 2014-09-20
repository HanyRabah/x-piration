'use strict';

/**
 * @ngdoc function
 * @name designersListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the designersListApp
 */
angular.module('designersListApp')
    .controller('MainCtrl', ['$scope', 'firebaseUrl',
        function($scope, firebaseUrl) {


            $scope.categories = firebaseUrl.getList().$asObject();


        }



    ]);