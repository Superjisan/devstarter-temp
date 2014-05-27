'use strict';

angular.module('mean.classes')
.controller('ClassController',
	['$scope',
	'$window',
	'$http',
	function($scope, $window, $http) {
		// $scope.global = Global;
		// $scope.limitct = 10;
		$scope.search = {
			name: '',
			cohort:'',
			hired: ''
		};
		$scope.formData = {};

		// $scope.devs = $window.devs;

		$scope.getDevs = function() {
			$http.get('/class').success(function(devs){
				$scope.devs = devs;
			});
		};

		$scope.saveInfo = function(id){
			console.log(id);
			// console.log(devId);
			$http.post('/saveClassData/'+id, $scope.formData).success(function(data) {
				console.log(data);
			});
		};


		$scope.searchFn = function(dev) {
			var st = $scope.search.name.toLowerCase();
			var cohort = $scope.search.cohort;
			var hired = $scope.search.hired;

			var hired_val = true;
			var text_val = true;
			var cohort_val = true;

			if (hired !== 'All Students') {
				if (hired === 'Hired' && dev.hired !== true) {
					hired_val = false;
				}
				else if (hired === 'Looking' && dev.hired === true){
					hired_val = false;
				}
			}





			var dev_text = ('' + dev.name).toLowerCase();
			if(st.length > 0) {
				if ( dev_text.indexOf(st) > -1) {
					text_val = true;
				} else {
					text_val = false;
				}
			}

			if (cohort !== 'All Students' && cohort !== dev.cohort) {
				cohort_val = false;
			}

			return text_val && cohort_val && hired_val;
		};

	}]);
