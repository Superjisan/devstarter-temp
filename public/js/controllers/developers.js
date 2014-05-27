'use strict';

angular.module('mean.developers')
.controller('DevelopersController',
	['$scope',
	'$window',
	'Global',
	function($scope, $window,  Global) {
		// $scope.global = Global;
		// $scope.limitct = 10;

		$scope.search = {
			name: '',
			relocate: false
		};

		$scope.developers = $window.developers;

		$scope.searchFn = function(dev) {
			var st = $scope.search.name.toLowerCase();
			var reloc = $scope.search.relocate;

			var text_val = true;
			var reloc_val = true;

			var dev_text = ('' + dev.name + dev.linkedin.summary + dev.linkedin.headline).toLowerCase();
			if(st.length > 0) {
				if ( dev_text.indexOf(st) > -1) {
					text_val = true;
				} else {
					text_val = false;
				}
			}
			if(reloc === true && dev.relocate !== true) {
				reloc_val = false;
			}

			return reloc_val && text_val;
		};

	}]);
