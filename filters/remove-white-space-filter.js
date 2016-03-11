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
  .filter('nospace', function () {
    return function (value) {
        return (!value) ? '' : value.replace(/ /g, '');
    };
});
