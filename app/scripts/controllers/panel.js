'use strict';

/**
 * @ngdoc function
 * @name designersListApp.controller:PanelCtrl
 * @description
 * # PanelCtrl
 * Controller of the designersListApp
 */
angular.module('designersListApp')
    .controller('PanelCtrl', function($scope, firebaseUrl) {

        $scope.removeItem = function(categoryKey, itemKey) {
            firebaseUrl.deleteItem(categoryKey, itemKey);
        };
        $scope.addNewItem = function(categoryKey, input) {
            firebaseUrl.addItem(categoryKey, input);
        };
        $scope.editItem = function(category, itemKey, input) {
            firebaseUrl.editItem(category, itemKey, input);
        }
         $scope.addNewCategory = function(input) {
            firebaseUrl.addCategory(input);
        }
    });