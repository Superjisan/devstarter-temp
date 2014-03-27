'use strict';

angular.module('mean.favorites').factory('FollowService', ['$http', function($http) {
	return {
		postInterest: function(name,cb) {
			// console.log(id);
			return $http.post('/addfavorite', {name: name}).success(cb);
		}
	};
}]);
