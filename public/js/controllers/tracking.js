'use strict';

angular.module('mean.tracking')

.controller('TrackingController',
	['$scope',
	'$stateParams',
	'$location',
	'$window',
	'Global',
	'VisitedBy',
	'Visited',
	'DeveloperSrvc',
	'ProfileEditSrvc',
	function($scope, $stateParams, $location, $window, Global, VisitedBy, Visited, DeveloperSrvc, ProfileEditSrvc){
		$scope.global = Global;
		ProfileEditSrvc.getProfile(function(data) {
      	$scope.user = data;
      });

		DeveloperSrvc.getProfile(function(data) {
      	$scope.developer = data;
      });

		$scope.startTimer = function(){
			var startTime = new Date();
			var visitingUser = $window.user;
			var userVisited = $window.developers;
			$window.eventTracker.start_time = startTime;
			$window.eventTracker.visitor = visitingUser;
			$window.eventTracker.visited = userVisited;


			$window.eventTracker.clicks = [];
			console.log($window.eventTracker);
		}

		$scope.addUserEvent= function(click){
			console.log("it works")
			var userInfo = $scope.user.events.user_visited;
			var userEvent = new Event($window.eventTracker);
			userEvent.$save(function(){
				$scope.user.events.clicks = click;
				$scope.user.events.start_time = $window.eventTracker.start_time;
				$scope.user.events.end_time = $window.eventTracker.end_time;
				userInfo.id = $scope.user._id;
				userInfo.name = $scope.user.name;
				userInfo.organization = $scope.user.work_experiences[0].company.name
			})
		}

		$scope.clickTrack = function(tab){
			var clickObj = {};
			var date = new Date();
			clickObj.time_clicked = date;
			clickObj.url = tab;

			if (window.eventTracker.clicks.length > 0) {
				var last_click =window.eventTracker.clicks[window.eventTracker.clicks.length - 1]
				last_click.end_time = date;
				$scope.addUserEvent(clickObj)
			}

			$window.eventTracker.clicks.push(clickObj);
			console.log($window.eventTracker.clicks);
		}



		$scope.addDeveloperEvent = function(){

		}
	}])

