'use-strict'

angular.module('mean.profile-edit').factory('ProfileEditSrvc', ['$http',
	function($http) {
		return {
			getProfile: function(cb) {
				return $http.get('/api/profile')
								.success(cb);
			}
		};
	}
])

