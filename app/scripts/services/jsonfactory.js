'use strict';

/**
 * @ngdoc service
 * @name designersListApp.jsonFactory
 * @description
 * # jsonFactory
 * Factory in the designersListApp.
 */
angular.module('designersListApp')
    .factory('jsonFactory', function($q, $http) {
        return {
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
        }
        
    });