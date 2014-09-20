'use strict';

/**
 * @ngdoc service
 * @name designersListApp.jsonSave
 * @description
 * # jsonSave
 * Factory in the designersListApp.
 */
angular.module('designersListApp')
  .factory('addNewWebsite', function () {
    // Service logic

    return $resource('storage/websites.json',
	    { todoId:'@_id' },
	    { update: { method: 'PUT' }}
    );
  });
