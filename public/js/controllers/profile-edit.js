'use strict';

angular.module('mean.profile-edit', ['mean.directives'])
  .controller('ProfileEditCtrl', ['$scope','Global', 'ProfileEditSrvc', 'Work', 'Education', 'Project', '_',
    function ($scope, Global, ProfileEditSrvc, Work, Education, Project, _) {
      // $scope.global = Global;
      $scope.Work = Work;
      $scope.Education = Education;
      $scope.Project = Project;
      $scope.new_project = {
          image: {
            crops: {
            }
          }
      };

      ProfileEditSrvc.getProfile(function(data) {
        $scope.user = data;
        // $scope.skills = data.linkedin.skills.values;
      });

      $scope.submitForm = function() {
        ProfileEditSrvc.editProfile($scope.user, function(data) {
          $scope.user = data;
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

      $scope.removeProject = function(projId) {
        var removedProject = _.remove($scope.user.projects, function(proj) {
          return proj._id === projId;
        });
        var project = new Project(removedProject[0]);
        project.$remove();
      }

      $scope.addProject = function() {
        // $scope.new_project.tags = $scope.projectTags;
        var project = new Project($scope.new_project);

        project.$save(function() {
          $scope.user.projects.unshift($scope.new_project);
          $scope.new_project = {};
          // $scope.projectTags = [];
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
