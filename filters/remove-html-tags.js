'use strict';

/**
 * @ngdoc filter
 * @name tgwcAngularUtility.filter:toTrusted
 * @function
 * @description
 * removeHTMLTags
 * Filter in the tgwcAngularUtility.
 */
angular.module('tgwcAngularUtility')
  .filter('removeHTMLTags', function() {
    return function(text) {
      return  text ? String(text).replace(/<[^>]+>/gm, '') : '';
    };
  });
