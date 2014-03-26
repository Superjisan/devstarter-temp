'use strict';

angular.module('mean.profile-edit').controller('ProfileEditCtrl', ['$scope','Global', 'ProfileEditSrvc',
	function ($scope, Global, ProfileEditSrvc) {
    $scope.global = Global;

    ProfileEditSrvc.getProfile(function(data) {
    	console.log(data);
    	$scope.user = data;
    })
  }
]);
