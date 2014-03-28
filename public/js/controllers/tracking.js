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


			$window.eventTracker.clicks = [];
			console.log($window.eventTracker);


		}

		$scope.clickTrack = function(tab){
			var clickObj = {};
			var date = new Date();
			clickObj.time_clicked = date;
			clickObj.url = tab;

			if (window.eventTracker.clicks.length > 0) {
				window.eventTracker.clicks[window.eventTracker.clicks.length - 1].end_time = date;
			}

			$window.eventTracker.clicks.push(clickObj);
			console.log($window.eventTracker.clicks);

		}
	}])
