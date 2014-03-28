'use strict';

angular.module('mean.profile-edit')
  .controller('ProfileEditCtrl', ['$scope','Global', 'ProfileEditSrvc', 'Work',
  	function ($scope, Global, ProfileEditSrvc, Work) {
      $scope.global = Global;

      ProfileEditSrvc.getProfile(function(data) {
      	console.log(data);
      	$scope.user = data;
      })

      $scope.submitForm = function(isValid) {
      	if (isValid) {
      		ProfileEditSrvc.editProfile(function(data) {
      			console.log(data);
      		})
      	}
      }

      $scope.removeWork = function(index) {
        var removedWork = $scope.user.work_experiences.splice(index, 1);
        var work = new Work(removedWork[0]);
        work.$remove();
      };
      $scope.addWork = function() {
        var work = new Work($scope.new_work);
        work.$save(function() {
          $scope.user.work_experiences.unshift($scope.new_work);
        });
      };
    }
  ])
  .filter('workDate', function() {
    function convertMonth(number) {
      return ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Nov", "Dec"][number-1];
    }

    return function(input) {
      if(input) {
        if(input.year && input.month) {
          return convertMonth(input.month) + ", " + input.year;
        } else if(input.year) {
          return input.year;
        } else { 
          return "";
        }
      } else {
        return "";
      }
    }
  });



// angular.module("hire.editApp", ["resources"])
//   .controller('FormCtrl', ['$scope', 'Global', '$element', 'Profile', 'Education', 'Employment', 
//     function ($scope, Global, $element, Profile, Education, Employment) {
//       // $scope.user = Profile.get(

        
//   }])
