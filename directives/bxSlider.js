/**
 * Created by Sampath on 10/19/2015.
 */

angular.module('tgwcAngularUtility')
    .directive('wrapBxSlider', function () {
        var linker = function(scope,element,attr){

            var loadBxSlider = function(){
                //var options = scope.$eval($(element).attr('data-options'));
                //element.owlCarousel(options);
            };

            var loadBxSliderActions = function(){

                scope.slider = $('.bxslider').bxSlider();

                angular.element(".bxslider_next").click(function(){
                    alert()
                    scope.slider.goToNextSlide();
                });
                angular.element(".bxslider_prev").click(function(){
                    scope.slider.goToPrevSlide();
                });
                angular.element(".bxslider_play").click(function(){
                    scope.slider.startAuto();
                });
                angular.element(".bxslider_stop").click(function(){
                    scope.slider.stopAuto();
                });
                angular.element(".bxslider_reload").click(function(){
                    scope.slider.reloadSlider();
                });
                angular.element(".bxslider_destroy").click(function(){
                    scope.slider.destroySlider();
                });
            };

            //scope.$watch(element.attr("render-watch"), function(value) {
            //    if (typeof value != 'undefined') {
            //        loadBxSlider(element);
            //    }
            //});

            loadBxSliderActions();
        };

        return{
            restrict : "EA",
            link: linker
        }
    });