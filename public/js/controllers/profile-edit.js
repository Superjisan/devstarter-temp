'use strict';

angular.module('mean.profile-edit')
  .controller('ProfileEditCtrl', ['$scope','Global', 'ProfileEditSrvc', 'Work', 'Education', 'Project',
  	function ($scope, Global, ProfileEditSrvc, Work, Education, Project) {
      $scope.global = Global;

      ProfileEditSrvc.getProfile(function(data) {
      	console.log(data);
      	$scope.user = data;
      	$scope.skills = data.linkedin.skills.values;
      });

      $scope.submitForm = function() {
      	ProfileEditSrvc.editProfile($scope.user, function(data) {
      		$scope.user = data;
      	})
      }

      $scope.removeEducation = function(index) {
      	var removedEducation = $scope.user.educations.splice(index, 1);
      	var education = new Education(removedEducation[0]);
      	education.$remove();
      };
      $scope.addEducation = function() {
      	var education = new Education($scope.new_education);
      	education.$save(function() {
      		$scope.user.educations.unshift($scope.new_education);
      		$scope.new_education = {};
      	})
      }

      $scope.removeWork = function(index) {
        var removedWork = $scope.user.work_experiences.splice(index, 1);
        var work = new Work(removedWork[0]);
        work.$remove();
      };
      $scope.addWork = function() {
      	console.log($scope.new_work.startDate);
      	var new_work = angular.copy($scope.new_work);
      	new_work.startDate = convertToDate($scope.new_work.startDate);
      	new_work.endDate = convertToDate($scope.new_work.endDate);
        var work = new Work(new_work);
        work.$save(function() {
          $scope.user.work_experiences.unshift(new_work);
          $scope.new_work = {};
        });
      };

      function convertToDate(dateObj) {
      	if (!dateObj) {
      		return undefined;
      	}
      	// var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Nov", "Dec"];
      	numMonth = dateObj.getMonth()+1;
      	return { "year": dateObj.getFullYear(), "month": numMonth };
      }

      $scope.removeProject = function(index) {
      	var removedProject = $scope.user.projects.splice(index, 1);
      	var project = new Project(removedProject[0]);
      	project.$remove();
      }

      $scope.addProject = function() {
      	$scope.new_project.tags = $scope.projectTags;
      	var project = new Project($scope.new_project);
      	project.$save(function() {
      		$scope.user.projects.unshift($scope.new_project);
      		$scope.new_project = {};
      		$scope.projectTags = [];
      	})
      }

      $scope.removeTag = function(index) {
      	$scope.skills.splice(index, 1);
      }

      $scope.addTag = function(event) {
      	if(event.which === 13) {
	      	$scope.skills.push({skill: {name: $scope.current_tag}});
	      	$scope.current_tag = "";
	      	event.preventDefault();
      	}
      };

      $scope.projectTags = [];


      $scope.removeProjectTag = function(index) {
      	$scope.projectTags.splice(index, 1);
      }

      $scope.addProjectTag = function(event) {
      	if(event.which === 13) {
      		$scope.projectTags.push($scope.currentTag);
      		$scope.currentTag = "";
      		event.preventDefault();
      	}
      }

    }
  ])
  .filter('workDate', function() {
    function convertMonth(number) {
      return ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Nov", "Dec"][number-1];
    }

    return function(input) {
      if(input) {
        if(input.year && input.month) {
          return convertMonth(input.month) + " " + input.year;
        } else if(input.year) {
          return input.year;
        } else {
          return "";
        }
      } else {
        return "";
      }
    }
  })
  .directive('filePicker', ['$compile', '$http', '$window', function ($compile, $http, $window) {
    return {
      restrict: 'C',
      controller: function($scope, $attrs, $window) {
        $scope.pickFiles = function(event) {
          event.preventDefault();
          var $element = angular.element(event.currentTarget).closest(".file-picker");
          var $attrs = $element.data();
          var $button = $element.find(".button")
          $window.filepicker.setKey("Acw0VeSQcTCSvPgAV5GEqz");
          debugger;
          var extensions = [".png", ".jpg", ".gif"].concat($scope.$eval($attrs.extensions));

          $button.addClass('button-loading');
          $window.filepicker.pickAndStore({
            extensions: extensions,
            container: "modal",
            services: ["COMPUTER", "FACEBOOK", "DROPBOX", "URL"],
            openTo: "COMPUTER"
          }, {
            location: "S3",
            path: "/assets/",
            access: "public"
          }, function (InkBlobs){
            console.log(InkBlobs);
            $scope.$apply(function() {
              var payload = {
                url: InkBlobs[0].url,
                filename: InkBlobs[0].filename,
                attachment: $attrs.attachment
              };
              // debugger;
              $http.put($attrs.attachmentPath, payload).success(function(data, status, headers) {
                $scope.$eval($attrs.resource)[$attrs.attachment] = angular.copy(data);
                $button.removeClass('button-loading');
              });
            });
          }, function (FPError){
            console.warn(FPError);
          })
      };
      }
    };
  }])








// angular.module("hire.editApp", ["resources"])
//   .controller('FormCtrl', ['$scope', 'Global', '$element', 'Profile', 'Education', 'Employment',
//     function ($scope, Global, $element, Profile, Education, Employment) {
//       // $scope.user = Profile.get(
