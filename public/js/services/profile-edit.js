'use-strict'

angular.module('mean.profile-edit')
	.factory('ProfileEditSrvc', ['$http',
		function($http) {
			return {
				getProfile: function(cb) {
					return $http.get('/api/profile')
									.success(cb);
				},
				editProfile: function(cb) {
					return $http.get('/api/profile/edit')
									.success(cb);
				}
			};
		}
	])
	.factory('Work', ['$resource', function ($resource) {
		return $resource('/api/work/:workId', {
			workId: "@_id"
		});
	}]);


// angular.module("resources", ["$resource"]);

// angular.module("resources")
// 	.factory('Profile', ['$resource', function($resource) {
// 		return $resource('/api/:developerId/profile', {
// 			developerId: "@_id"
// 		});
// 	}]);
	

