'use strict';

angular.module('mean.developers')

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


	}]);
