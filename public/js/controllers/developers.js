'use strict';

angular.module('mean.developers')
.controller('DevelopersController',
	['$scope',
	'$window',
	'Global',
	function($scope, $window,  Global) {
		// $scope.global = Global;
		// $scope.limitct = 10;

		$scope.developers = $window.developers;
    // debugger;
	}]);
