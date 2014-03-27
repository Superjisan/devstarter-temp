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
	function($scope, $stateParams, $location, $window,  Global) {
		$scope.global = Global;
		$scope.limitct = 10;
		console.log($window.names);
		$scope.names = $window.names;


	}]);
