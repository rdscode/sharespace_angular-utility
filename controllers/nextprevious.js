'use strict';

/**
 * @ngdoc function
 * @name tgwcAngularUtility.controller:NextpreviousCtrl
 * @description
 * # NextpreviousCtrl
 * Controller of the tgwcAngularUtility
 */
angular.module('tgwcAngularUtility')
  .controller('NextPreviousCtrl', ['$scope', 'DrupalNextPrevious', function ($scope, DrupalNextPrevious) {

    $scope.getNextPrevious = function() {
      DrupalNextPrevious.get($scope.page.nid, $scope.page.type).success(function(result) {
        $scope.nextprevious = result;
      })
    };

    $scope.getNextPrevious();
  }]);
