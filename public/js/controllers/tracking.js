'use strict';

angular.module('mean.tracking')

.controller('TrackingController',
	['$scope',
	'$location',
	'$window',
	'Global',
	'VisitedBy',
	'Visited',
	'DeveloperSrvc',
	'ProfileEditSrvc',
	function($scope, $location, $window, Global, VisitedBy, Visited, DeveloperSrvc, ProfileEditSrvc){
		$scope.global = Global;



				$scope.user = $window.user;
      	$scope.developer = $window.developer;

    $scope.toLocalTime = function(date) {
    	return date.toLocaleString()
    }


		$scope.startTimer = function(){
			var startTime = new Date();
			var visitingUser = $window.user;
			var userVisited = $window.developer;
			$window.eventTracker.start_time = startTime;
			$window.eventTracker.visitor = visitingUser;
			$window.eventTracker.visited = userVisited;


			$window.eventTracker.clicks = [];
			console.log($window.eventTracker);
		}

		$scope.startTracking = function() {

			var time_visited = new Date();

			console.log("Add Users Visited is running")
			console.log("scope user: ", $scope.user.visited_profiles.length, $scope.user.visited_profiles)
			var eventsObj1 = {}
			eventsObj1.users = {};
			eventsObj1.develId = $scope.developer._id;
			var userInfo = eventsObj1.users;
			userInfo.id = $scope.user._id;
			userInfo.name = $scope.user.name;
			userInfo.time_visited = time_visited;
			userInfo.organization = $scope.user.work_experiences[0].company.name;


			var userEvent1 = new VisitedBy(eventsObj1);
			userEvent1.$save(function(){

				$scope.user.visited_profiles.push(eventsObj1)
			})
      /////////////////////////////////////////////////////////////////
			console.log("add to users_visited is getting called")
			console.log("scope developer: ", $scope.developer.name)
			var eventsObj = {}
			eventsObj.users = {};
			var developerInfo = eventsObj.users;

			developerInfo.id = $scope.developer._id;
			developerInfo.name = $scope.developer.name;
			developerInfo.time_visited = time_visited;
			developerInfo.organization = $scope.developer.work_experiences[0].company.name;

			var userEvent = new Visited(eventsObj);
			userEvent.$save(function(){

				$scope.developer.profiles_visited.push(eventsObj)
			})
		};

		$scope.addVisitedUsers = function(){
			var time_visited = new Date();
			var visitingUser = $window.user;
			var userVisited = $window.developer;

		}

		$scope.addDeveloperEvent = function(click){

			console.log("it works")
			console.log("scope user: ", $scope.user.events.length, $scope.user.events)
			var eventsObj = {}
			eventsObj.users_visited = {};
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
			eventsObj.visited_users = {};
			var developerInfo = eventsObj.visited_users;
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

		//function gotten from http://stackoverflow.com/questions/498578/how-can-i-convert-a-date-value-in-iso-8601-format-to-a-date-object-in-javascript
		$scope.ISOdate = {
				  convert :
				    function (input){
				      if (!(typeof input === "string")) throw "ISODate, convert: input must be a string";
				      var d = input.match(/^(\d{4})-?(\d{2})-?(\d{2})[T ](\d{2}):?(\d{2}):?(\d{2})(\.\d+)?(Z|(?:([+-])(\d{2}):?(\d{2})))$/i);
				      if (!d) throw "ISODate, convert: Illegal format";
				      return new Date(
				        Date.UTC(
				          d[1], d[2]-1, d[3],
				          d[4], d[5], d[6], d[7] || 0 % 1 * 1000 | 0
				        ) + (
				          d[8].toUpperCase() === "Z" ? 0 :
				            (d[10]*3600 + d[11]*60) * (d[9] === "-" ? 1000 : -1000)
				        )
				      );
				    },
				  format :
				    function(date, utc){
				      if (typeof date === "string") date = this.convert(date);
				      if (!(date instanceof Date)) throw "ISODate, format: t is not a date object";

				      var t={'FullYear':0, 'Month':0, 'Date':0, 'Hours':0, 'Minutes':0, 'Seconds':0};
				      for (var key in t) {
				        if (t.hasOwnProperty(key)) t[key] = date["get" +(utc ? "UTC" :"") + key]()
				      }

				      return this.month[t.Month]
				        + " "
				        + this.ordinal(t.Date)
				        + ", "
				        + t.FullYear
				        + " @ "
				        + this.clock12(t.Hours,t.Minutes);
				      },
				  month:
				    [
				      "January", "February", "March", "April", "May", "June",
				      "July", "August", "September", "October", "November", "December"
				    ],
				  ordinal:
				    function(n) {
				      return n+(
				        [
				          "th", "st", "nd", "rd"
				        ][
				          (( n % 100 / 10) | 0) === 1 ? 0 : n % 10 < 4 ? n % 10 : 0
				        ]
				      );
				  },
				  clock12:
				    function(h24, m, s){
				      h24%=24;
				      var h12 = (h24 % 12) || 12;
				      return h12 + ":" +
				        (m < 10 ? "0" + m : m) +
				        (isFinite(s) ? ":" + (s < 10 ? "0" + s : s ) : "") +
				        (h24 < 12 ? "AM" : "PM");
				      }
				};

	}//end of function
	])

