'use strict';

/**
 * @ngdoc service
 * @name designersListApp.firebase
 * @description
 * # firebase
 * Factory in the designersListApp.
 */
angular.module('designersListApp')
  .factory('firebaseUrl', function ($firebase) {
    var url = "https://x-piration.firebaseio.com/";
    var ref = new Firebase(url);

        return {
            getList: function(scope, localScopeVarName) {
            	var sync = $firebase(ref);
            	return sync;
            },
            addItem: function(category, item) {
                var categoryUrl = new Firebase(url+ '/' + category);
                categoryUrl.push({name: item.name, url: item.url});
            },
            deleteItem: function(category, key) {
            	var itemRef = new Firebase(url+ '/' + category + '/' + key);
                itemRef.remove();
            },
            editItem: function(category, key,  item) {
            	var itemRef = new Firebase(url+ '/' + category  + '/' + key);
            	itemRef.update({name: item.name, url: item.url});
            }
        };
  
  });


