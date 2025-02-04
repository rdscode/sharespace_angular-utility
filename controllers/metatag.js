'use strict';

/**
 * @ngdoc function
 * @name tgwcAngularUtility.controller:MetatagCtrl
 * @description
 * # MetatagCtrl
 * Controller of the tgwcAngularUtility
 */
angular.module('tgwcAngularUtility')
  .controller('MetatagCtrl', ['$scope', 'DrupalSeoLoader', '$location', function ($scope, DrupalSeoLoader, $location) {

    $scope.getMetaTags = function() {
      var path = $location.$$path;
      if (path == '/') {
        path = '/home';
      }
      $scope.tags = DrupalSeoLoader.query({path: path});
    };

    $scope.getMetaTags();
    $scope.$on('$locationChangeStart', function(event) {
      $scope.getMetaTags();
    });
  }]);
