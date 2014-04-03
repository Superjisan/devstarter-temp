'use strict';

angular.module('mean.profile-edit', ['mean.directives'])
  .controller('ProfileEditCtrl', [
    '$scope',
    'Global', 
    'ProfileEditSrvc', 
    'Work', 
    'Education', 
    'Project', 
    '_', 
    '$anchorScroll',
    '$location',
    '$timeout',
    function ($scope, Global, ProfileEditSrvc, Work, Education, Project, _, $anchorScroll, $location, $timeout) {
      // $scope.global = Global;
      $scope.Work = Work;
      $scope.Education = Education;
      $scope.Project = Project;
      $scope.new_project = {};
      $scope.saveButtonText = 'SAVE PROFILE';

      $scope.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
      }

      ProfileEditSrvc.getProfile(function(data) {
        $scope.user = data;
        // $scope.skills = data.linkedin.skills.values;
      });

      $scope.submitForm = function() {
      	$scope.saveButtonText = 'Saving...';
        ProfileEditSrvc.editProfile($scope.user, function(data) {
          $scope.user = data;
          $scope.saveButtonText = 'Saved.';
          $timeout(function(){
          	$scope.saveButtonText = 'SAVE PROFILE';
          },
          1000);
        })
      };

      $scope.addEducation = function() {
        var education = new Education($scope.new_education);
        education.startDate = convertToDate($scope.new_education.startDate);
        education.endDate = convertToDate($scope.new_education.endDate);

        education.$save(function(education) {
          $scope.user.educations.unshift(education);
          $scope.new_education = {};
        })
      }

      $scope.removeObj = function(obj, array, resourceType) {
        _.remove(array, function(arrObj) {
          return obj._id === arrObj._id;
        });
        var castObj = new resourceType(obj);
        castObj.$remove();
      };

      $scope.addWork = function() {
        // console.log($scope.new_work.startDate);
        var new_work = angular.copy($scope.new_work);
        new_work.startDate = convertToDate($scope.new_work.startDate);
        new_work.endDate = convertToDate($scope.new_work.endDate);

        var work = new Work(new_work);

        work.$save(function(saved_work) {
          $scope.user.work_experiences.push(saved_work);
          $scope.new_work = {};
        });
      };


      function convertToDate(dateObj) {
        if (!dateObj) {
          return undefined;
        }
        // var monthArr = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Nov", "Dec"];
        // var numMonth = monthArr[dateObj.getMonth()+1];
        return { "year": dateObj.getFullYear(), "month": dateObj.getMonth()+1 };
      }

      /* PROJECTS */
      $scope.editProject = function(project) {
        $scope.new_project = project;
      };

      $scope.addOrSaveProject = function() {
        // $scope.new_project.tags = $scope.projectTags;
        var project = new Project($scope.new_project);

        project.$save(function(saved_project) {
          var index = _.findIndex($scope.user.projects, function(project) { return project._id === saved_project._id });
          if(index > -1) {
            $scope.user.projects[index] = saved_project;
          } else {
            $scope.user.projects.unshift(saved_project);
          }
          // $scope.user.projects = projects;
          $scope.new_project = {};
        })
      }

      // $scope.removeTag = function(index) {
      //   $scope.skills.splice(index, 1);
      // }

      // $scope.addTag = function(event) {
      //   if(event.which === 13) {
      //     $scope.skills.push({skill: {name: $scope.current_tag}});
      //     $scope.current_tag = "";
      //     event.preventDefault();
      //   }
      // };

      // $scope.projectTags = [];


      // $scope.removeProjectTag = function(index) {
      //   $scope.projectTags.splice(index, 1);
      // }


      // $scope.addProjectTag = function(event) {
      //   if(event.which === 13) {
      //     $scope.projectTags.push($scope.currentTag);
      //     $scope.currentTag = "";
      //     event.preventDefault();
      //   }
      // }

    }
  ])
  .filter('workDate', function() {
    function convertMonth(number) {
    	console.log(number);
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
// angular.module("hire.editApp", ["resources"])
//   .controller('FormCtrl', ['$scope', 'Global', '$element', 'Profile', 'Education', 'Employment',
//     function ($scope, Global, $element, Profile, Education, Employment) {
//       // $scope.user = Profile.get(
