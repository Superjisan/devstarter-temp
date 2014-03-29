'use-strict'

angular.module('mean.tracking')
  .factory('DeveloperSrvc', ['$http',
    function($http) {
      return {
        getProfile: function(cb) {
          return $http.get('/api/devProfiles')
                  .success(cb);
        },
      };
    }
  ])
  .factory('Visited', ['$resource', function ($resource) {
    return $resource('/api/events', {
      visitedId: "@_id"
    });
  }])
  .factory('VisitedBy', ['$resource', function($resource) {
    return $resource('/api/events', {
      visitedById: "@_id"
    });
  }])
