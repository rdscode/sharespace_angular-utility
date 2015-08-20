'use strict';

/**
 * @ngdoc filter
 * @name fusePumpAngularApp.filter:toTrusted
 * @function
 * @description
 * # toTrusted
 * Filter in the fusePumpAngularApp.
 */
angular.module('tgwcAngularUtility')
  .filter('trustAsHtml', ['$sce', function ($sce) {
      return function(text) {
        return $sce.trustAsHtml(text);
      };
  }]);
