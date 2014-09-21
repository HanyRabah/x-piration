'use strict';

/**
 * @ngdoc service
 * @name designersListApp.firebase
 * @description
 * # firebase
 * Factory in the designersListApp.
 */
angular.module('designersListApp')
    .factory('firebaseUrl', function($firebase, $window) {
        //var url = "https://x-piration.firebaseio.com/";
        var url = "https://x-piration-two.firebaseio.com/";
        var ref = new Firebase(url);



        return {
            getList: function() {
                var sync = $firebase(ref);
                return sync;
            },
            addCategory: function(input) {
                var categoryUrl = new Firebase(url);
                categoryUrl.root().child(input.name).set({
                    category: {name: input.name, description:input.description }
                });
            },
            addItem: function(parent_id, input) {
                if (input != undefined) {
                    var categoryUrl = new Firebase(url + '/' + parent_id);
                    var itemUrl = categoryUrl.child('items');
                    itemUrl.child(input.name).set({
                        name: input.name,
                        url: input.url,
                        date: Firebase.ServerValue.TIMESTAMP,
                        free: input.free
                    });
                }
            },
            deleteItem: function(parent_id, key) {
                var deleteItem = $window.confirm('Are you absolutely sure you want to delete?');
                if (deleteItem) {
                    var categoryUrl = new Firebase(url + '/' + parent_id);
                    var itemUrl = categoryUrl.child('items');
                    itemUrl.child(key).remove();
                }
            },
            editItem: function(parent_id, key, input) {
                console.log(input);
                if (input != undefined) {
                    var categoryUrl = new Firebase(url + '/' + parent_id);
                    var itemUrl = categoryUrl.child('items');

                    itemUrl.child(key).update({
                        name: input.name,
                        url: input.url,
                        date: Firebase.ServerValue.TIMESTAMP,
                        free: input.free
                    });
                }
            }
        };

    });