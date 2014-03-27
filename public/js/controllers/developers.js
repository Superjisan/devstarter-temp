'use strict';

angular.module('mean.developers')

// allows you to use [[variables]] instead of {{variables}} to prevent confusion with swig

.config(function($interpolateProvider) {
	$interpolateProvider.startSymbol('[[');
	$interpolateProvider.endSymbol(']]');
})

.controller('DevelopersController',
	['$scope',
	'$stateParams',
	'$location',
	'$window',
	'Global',
	function($scope, $stateParams, $location, $window,  Global) {
		$scope.global = Global;
		$scope.limitct = 10;

		$scope.developers = $window.developers;
		$scope.startTimer = function() {
			var startTime = new Date();
			console.log("the start time is", startTime)
		}
	}])
.run(function ($rootScope, $location) { //Insert in the function definition the dependencies you need.
    //Do your $on in here, like this:
    $rootScope.$on("$locationChangeStart",function(event, next, current){
        var time_now = new Date()
        console.log("the time now is", time_now)
        //Do your things
        if(!$rootScope.isFormValid()){
            //prevent location change.
            event.preventDefault();
        }
    });
});
