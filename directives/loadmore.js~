'use strict';

/**
 * @ngdoc directive
 * @name fusePumpAngularApp.directive:loadmore
 * @description
 * # loadmore
 */
angular.module('tgwcAngularUtility')
  .directive('loadmore', function () {
    return {
      restrict: 'EA',
      link: function postLink(scope, element, attrs) {
        var raw = element[0];
        console.log(raw);
        $(window).bind('scroll', function() {
          /*console.log($('body').scrollTop());
          console.log(raw.offsetHeight);*/
          if ($('body').scrollTop() > raw.offsetHeight - 500) {
            scope.$apply(attrs.whenScrolled);
          }
        });
      }
    };
  });
