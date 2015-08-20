'use strict';

/**
 * @ngdoc directive
 * @name fusePumpAngularApp.directive:matchHeight
 * @description
 * # matchHeight
 */
angular.module('tgwcAngularUtility')
  .directive('matchHeight', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
        scope.$watch(attrs.renderwatch, function() {
          // Requires an additional timeout after render watching to account for processing time
          window.setTimeout(function(){
            $(element).find(".match").matchHeight(false);
          }, 200);
        });
      }
    };
  });
