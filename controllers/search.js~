'use strict';

/**
 * @ngdoc function
 * @name fusePumpAngularApp.controller:SearchCtrl
 * @description
 * # SearchCtrl
 * Controller of the fusePumpAngularApp
 */
angular.module('tgwcAngularUtility')
  .controller('SearchCtrl', ['$scope', '$routeParams', '$location', 'DrupalSearchAPI', 'DrupalBlogSearchAPI', '$anchorScroll', 
  function ($scope, $routeParams, $location, DrupalSearchAPI, DrupalBlogSearchAPI, $anchorScroll) {
    $scope.userInput = "";
    $scope.limit = 8;
    $scope.total = 0;
    $scope.page = 0;

    $scope.loadSearch = function() {
      $scope.userInput = $routeParams.query;
      console.log($routeParams);
      if (typeof $routeParams.type != 'undefined' && $routeParams.type == 'blog') {
        $scope.results = DrupalBlogSearchAPI.query({query: $routeParams.query, limit: 8, page:$routeParams.page}, function(results) {
          $scope.getTotal();
        });
      } else {
        $scope.results = DrupalSearchAPI.query({query: $routeParams.query, limit:8, page:$routeParams.page}, function(results) {
          $scope.getTotal();
        });
      }
      console.log($scope.results);
    };

    $scope.getTotal = function() {
      $scope.total = ($scope.results.max_page * $scope.results.list.length) - 1;
    };

    $scope.runSearch = function() {
      $location.path("/search/"+$scope.userInput);
    };

    $scope.runBlogSearch = function() {
      $location.path("/search/"+$scope.userInput).search('type', 'blog');
    };

    $scope.changePage = function (newPage) {
      $scope.results = DrupalSearchAPI.query({query: $scope.userInput, limit:8, page: newPage-1}, function(results) {
        $location.hash('top');
        $anchorScroll();
        $scope.getTotal();
      });
    };

    $scope.resultsExist = function() {
      var ret = true;
      if (typeof $scope.results !== undefined && $scope.results.list !== undefined && $scope.results.list.length > 0) {
        ret = false;
      }
      return ret;
    };

    $scope.loadSearch();

  }]);
