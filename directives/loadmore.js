'use strict';

/**
 * @ngdoc directive
 * @name tgwcAngularUtility.directive:loadmore
 * @description
 * # loadmore
 */
angular.module('tgwcAngularUtility')
  .directive('loadmore', function () {
    return {
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        var raw = element[0];
        $(window).bind('scroll', function() {
          if ($('body').scrollTop() > raw.offsetHeight - 500) {
            scope.$apply(attrs.whenScrolled);
          }
        });
      }
    };
  });
