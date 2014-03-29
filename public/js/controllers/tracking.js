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


      	$scope.developer = $window.developers


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
		$scope.addDeveloperEvent = function(click){

			console.log("it works")
			console.log("scope user: ", $scope.user.events.length, $scope.user.events)
			var eventsObj = {}
			eventsObj.user_visited = {};
			var userInfo = eventsObj.user_visited;
			eventsObj.clicks = $window.eventTracker.clicks[$window.eventTracker.clicks.length - 1];
			eventsObj.start_time = $window.eventTracker.start_time;
			eventsObj.end_time = $window.eventTracker.end_time;
			userInfo.id = $scope.user._id;
			userInfo.name = $scope.user.name;
			userInfo.organization = $scope.user.work_experiences[0].company.name;


			var userEvent = new Visited(eventsObj);
			userEvent.$save(function(){

				$scope.user.events.push(eventsObj)
			})
		};

		$scope.addUserEvent= function(click){
			console.log("add to developer is getting called")
			console.log("scope developer: ", $scope.developer.name)
			var eventsObj = {}
			eventsObj.visiting_user = {};
			var developerInfo = eventsObj.visiting_user;
			eventsObj.clicks = $window.eventTracker.clicks[$window.eventTracker.clicks.length - 1];
			eventsObj.start_time = $window.eventTracker.start_time;
			eventsObj.end_time = $window.eventTracker.end_time;
			developerInfo.id = $scope.developer._id;
			developerInfo.name = $scope.developer.name;
			developerInfo.organization = $scope.developer.work_experiences[0].company.name;

			var userEvent = new VisitedBy(eventsObj);
			userEvent.$save(function(){

				$scope.developer.events.push(eventsObj)
			})
		}

		$scope.clickTrack = function(tab){
			var clickObj = {};
			var date = new Date();
			clickObj.time_clicked = date;
			clickObj.url = tab;
			console.log($window.eventTracker.clicks.length)
			if ($window.eventTracker.clicks.length > 0) {
				var last_click = $window.eventTracker.clicks[$window.eventTracker.clicks.length - 1]
				last_click.end_time = date;
				$scope.addUserEvent(clickObj);
				$scope.addDeveloperEvent(clickObj);
			}

			$window.eventTracker.clicks.push(clickObj);
			console.log($window.eventTracker.clicks);
		}
	}])

