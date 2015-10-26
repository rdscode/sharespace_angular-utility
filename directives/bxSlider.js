/**
 * Created by Sampath on 10/19/2015.
 */

angular.module('tgwcAngularUtility')
    .directive('wrapBxSlider', function () {
        alert();
        return {
            link: function (scope, elem, attr) {

                scope.slider = angular.element('.bxslider');

                //$(document).ready(function () {
                //
                //    scope.slider = angular.element('.bxslider');
                //
                //    scope.slider.bxSlider({
                //        adaptiveHeight: true,
                //        pagerCustom: '#owl-demo'
                //    });
                //
                //});

                scope.slider = angular.element('.bxslider').bxSlider();

                angular.element(".bxslider_next").click(function () {
                    scope.slider.goToNextSlide();
                });
                angular.element(".bxslider_prev").click(function () {
                    scope.slider.goToPrevSlide();
                });
                angular.element(".bxslider_play").click(function () {
                    scope.slider.startAuto();
                });
                angular.element(".bxslider_stop").click(function () {
                    scope.slider.stopAuto();
                });
                angular.element(".bxslider_reload").click(function () {
                    scope.slider.reloadSlider();
                });
                angular.element(".bxslider_destroy").click(function () {
                    scope.slider.destroySlider();
                });

            }
        }

    });