'use strict';

/**
 * @ngdoc directive
 * @name fusePumpAngularApp.directive:ImageLink
 * @description
 * # ImageLink
 */
angular.module('tgwcAngularUtility')
  .directive('imageLink', function ($modal) {
    return {
      restrict: 'E',
      template: '<a ng-href="{{link_href}}" ng-click="open()"><img ng-src="{{src}}" alt="{{alt}}" class="img-responsive" /></a>',
      link: function postLink(scope, element, attrs) {
        console.log('imagelink');
        console.log('element');
        var loadImageLink = function() {
          scope.link_href = '';
          scope.href = attrs.href;
          scope.alt = attrs.alt;
          if (attrs.href && attrs.href.search("youtube") == -1 && attrs.href.search("wistia") == -1) {
            scope.link_href = scope.href;
          }
          scope.src = attrs.src;
        };

        scope.open = function(video) {
          if (scope.href.search("youtube") == -1 && scope.href.search("wistia") == -1) {
            return false;
          }
          scope.video = video;
          var modalInstance = $modal.open({
            templateUrl: 'views/videomodal.html',
            controller:  function($scope, $modalInstance){
              $scope.href = scope.href;
              $scope.close = function() {
                console.log('close modal');
                $modalInstance.dismiss();
              }
            },
            windowClass: 'app-modal-window video',
            backdrop: true,
            size: 'lg',
            resolve: {
              custEmail: function(){
                return {email: scope.email};
              }
            }
          });
          modalInstance.result.then(function(){
            console.log('Finished');
          }, function(){
            console.log('Modal dismissed at : ' + new Date());
            modalInstance.template = '';
          });
          return false;
        };

        scope.$watch(element.attr("render-watch"), function(value) {
          loadImageLink();
        });

      }
    };
  });
