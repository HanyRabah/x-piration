'use strict';

/**
 * @ngdoc service
 * @name designersListApp.jsonFactory
 * @description
 * # jsonFactory
 * Factory in the designersListApp.
 */
angular.module('designersListApp')
    .factory('jsonFactory', ['$http', '$rootScope',
        function($http, $rootScope) {


            var categories = [];

            return {
                getIt: function() {
                    return $http.get('storage/websites.json').then(function(response) {
                        categories = response.data;
                        $rootScope.$broadcast('handleCategories', categories);
                        return categories;
                    })
                },
                saveIt: function($params, category) {
                    return $http({
                            headers: { 'Content-Type': undefined },
                            url: 'storage/websites.json',
                            method: "POST",
                            data: $params,
                        })
                        .success(function(addData) {
                            alert('success');
                            categories = addData;
                            $rootScope.$broadcast('handleCategories', categories);
                        });
                }
            };
        }
    ]);

/*return {
            getInspirationStuff: function() {
                var deferred = $q.defer(),
                    httpPromise = $http.get('storage/websites.json');

                httpPromise.then(function(response) {
                    deferred.resolve(response.data);
                }, function(error) {
                    console.log(error);
                });

                return deferred.promise;
            }
        }*/