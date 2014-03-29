'use strict';

angular.module('mean', ['ngCookies', 'ngResource', 'ui.bootstrap', 'ui.router', 'mean.system', 'mean.developers', 'mean.tracking', 'mean.articles', 'mean.profile-edit','mean.favorites'])
  .config(function($interpolateProvider) {
    $interpolateProvider.startSymbol('[[');
    $interpolateProvider.endSymbol(']]');
  })

angular.module('mean.directives', []);
angular.module('mean.system', []);
angular.module('mean.articles', []);
angular.module('mean.developers', []);
angular.module('mean.tracking', []);
angular.module('mean.profile-edit', ['mean.directives']);
angular.module('mean.favorites', []);
angular.module('mean').constant('_', _);
