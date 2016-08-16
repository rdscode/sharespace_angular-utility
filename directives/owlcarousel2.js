/**
 * Created by udara on 8/16/16.
 */

angular.module('tgwcAngularUtility')
	.directive('wrapOwlcarousel2', function ($timeout) {
		var linker = function (scope, element, attr) {
			$timeout(function() {
				var loadCarousel = function () {
					$timeout(function() {
						var options = scope.$eval($(element).attr('data-options'));
						element.owlCarousel(options);
					}, 10);
				};

				scope.$watch(element.attr('render-watch'), function (value) {
					if (typeof value != 'undefined') {
						loadCarousel(element);
					}
				});
			}, 50);
		};
		return {
			restrict: "EA",
			link: linker
		}
	});
