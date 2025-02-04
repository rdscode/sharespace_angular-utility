'use strict';

/**
 * @ngdoc filter
 * @name tgwcAngularUtility.filter:trusted
 * @function
 * @description
 * # trusted
 * Filter in the tgwcAngularUtility.
 */
angular.module('tgwcAngularUtility')
  .filter('trustAsResource', ['$sce', function ($sce) {
    return function(url) {
      if (typeof url == 'string') {
        return $sce.trustAsResourceUrl(url);
      }
    };
  }]);
