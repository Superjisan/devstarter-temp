'use strict';

angular.module('mean.favorites')

// allows you to use [[variables]] instead of {{variables}} to prevent confusion with swig
.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
})

.controller('InterestedController',
	['$scope',
	'$stateParams',
	'$location',
	'$window',
	'Global',
	'FollowService',
	'$http',
	function($scope, $stateParams, $location, $window,  Global, FollowService, $http) {
		$scope.global = Global;
		$scope.limitct = 10;
		// $scope.names = $window.names;
		$scope.developers = $window.developers;
		$scope.follow = function(name){
			// console.log(name);
			FollowService.postInterest(name,function(data){
				console.log(data);
			});
		};

		$scope.loadInterested = function() {
			$http.get('/api/interests').success(function(data) {
				console.log(data);
				$scope.interested_users = data;
			});
		};

		$scope.removeInterest = function(event, userId) {
			$http.delete('/api/interests/' + userId)
				.success(function() {
					$scope.loadInterested();
				});
		};

	}]);
