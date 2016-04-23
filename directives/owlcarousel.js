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
      
     var loadCarouselActions = function(){
      console.log('adding actions');
      angular.element(".owlcarousel_next").click(function(){
        angular.element(".owlcarousel_next").attr("href", "");
        element.trigger('owl.next');
      });
      angular.element(".owlcarousel_prev").click(function(){
        angular.element(".owlcarousel_prev").attr("href", "");
        element.trigger('owl.prev');
      });
      angular.element(".owlcarousel_play").click(function(){
        angular.element(".owlcarousel_play").attr("href", "");
        element.trigger('owl.play', 1000);
      });
      angular.element(".owlcarousel_stop").click(function(){
        angular.element(".owlcarousel_stop").attr("href", "");
        element.trigger('owl.stop');
      })
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
