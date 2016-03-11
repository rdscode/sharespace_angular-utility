'use strict';

/**
 * @ngdoc directive
 * @name tgwcAngularUtility.directive:wrapOwlCarousel
 * @description
 * # OwlCarousel
 */
angular.module('tgwcAngularUtility')
  .directive('wrapOwlcarousel', function () {
    var linker = function(scope,element,attr){

      var loadCarousel = function(){
        var options = scope.$eval($(element).attr('data-options'));
        element.owlCarousel(options);
      };

      scope.$watch(element.attr("render-watch"), function(value) {
        if (typeof value != 'undefined') {
          loadCarousel(element);
          loadCarouselActions();
        }
      });
    };

    return{
      restrict : "EA",
      link: linker
    }
  });
