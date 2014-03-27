'use strict';

angular.module('mean.developers').factory('Developers', ['$resource', function($resource) {
	return $resource('developers/:developerId', {
		articleId: '@_id'
	}, {
		update: {
			method: 'PUT',
			isArray : false
		},

	});
}]);
