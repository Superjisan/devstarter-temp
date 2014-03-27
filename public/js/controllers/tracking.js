'use strict';

angular.module('mean.tracking')

.controller('TrackingController',
	['$scope',
	'$stateParams',
	'$location',
	'$window',
	'Global',
	function($scope, $stateParams, $location, $window, Global){
		$scope.global = Global;
		$scope.startTimer = function(){
			var startTime = new Date();
			var visitingUser = $window.user;
			var userVisited = $window.developers;
			$window.eventTracker.timeStart = startTime;
			$window.eventTracker.visitor = visitingUser;
			$window.eventTracker.visited = userVisited;
			console.log($window.eventTracker);
		}
	}])