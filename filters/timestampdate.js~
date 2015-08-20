'use strict';

/**
 * @ngdoc filter
 * @name fusePumpAngularApp.filter:TimestampDate
 * @function
 * @description
 * # TimestampDate
 * Filter in the fusePumpAngularApp.
 */
angular.module('tgwcAngularUtility')
  .filter('timestampdate', function () {
    return function (input) {
      var date_raw = new Date(input * 1000);
      return date_raw;
      //return date_raw.getDate() + '/' + (date_raw.getMonth()+1) + '/' + date_raw.getFullYear();
    };
  });
