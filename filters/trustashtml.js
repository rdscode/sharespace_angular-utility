'use strict';

/**
 * @ngdoc filter
 * @name tgwcAngularUtility.filter:toTrusted
 * @function
 * @description
 * # toTrusted
 * Filter in the tgwcAngularUtility.
 */
angular.module('tgwcAngularUtility')
  .filter('trustAsHtml', ['$sce', function ($sce) {
      return function(text) {
        return $sce.trustAsHtml(text);
      };
  }]);
