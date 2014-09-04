'use strict';

/**
 * @ngdoc function
 * @name designersListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the designersListApp
 */
angular.module('designersListApp')
    .controller('MainCtrl', ['$scope', '$routeParams', '$route', 'jsonFactory',
        function($scope, $routeParams, $route, jsonFactory) {



            jsonFactory.getIt().then(function(data) {
                $scope.categories = data;
            });
            $scope.$on('handleCategories', function(events, data) {
                $scope.categories = data;
            });

            $scope.save = function(formData) {
                console.log(formData);
                $routeParams = $.param({ 
                    "name": formData.name,
                    "url": formData.url
                })
                jsonFactory.saveIt($routeParams,formData.category);

            }
        }

            /*$scope.categories = {};
        $scope.allCategories = {}
        jsonFactory.getInspirationStuff()
            .then(function(data) {
                $scope.categories = data;
                $scope.website.category = data;
            }, function(error) {
                console.error(error);
            });


        $scope.save = function() {

            $params = $.param({
                "name": website.name,
                "url": website.url,
            })
            sharedBooks.jsonSave($params);




        };
*/


    ]);