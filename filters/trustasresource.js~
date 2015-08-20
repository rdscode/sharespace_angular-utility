'use strict';

/**
 * @ngdoc filter
 * @name fusePumpAngularApp.filter:trusted
 * @function
 * @description
 * # trusted
 * Filter in the fusePumpAngularApp.
 */
angular.module('tgwcAngularUtility')
  .filter('trustAsResource', ['$sce', function ($sce) {
    return function(url) {
      if (typeof url == 'string') {
        return $sce.trustAsResourceUrl(url);
      }
    };
  }]);