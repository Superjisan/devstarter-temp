'use strict';

angular.module('mean.developers').controller('DevelopersController',
                                                  ['$scope',
                                                    '$stateParams',
                                                    '$location',
                                                    'Global',
                                                    'Developers',
    function($scope, $stateParams, $location, Global, Developers) {
      $scope.global = Global;
      $scope.limitct = 10;

      $scope.find = function() {
        Developers.query(function(developers) {
            $scope.developers = developers;
          });
      };

      $scope.findOne = function() {
        Developers.get({
            developerId: $stateParams.developerId
        }, function(developer) {
            $scope.developer = developer;
        });
      };
    }])
