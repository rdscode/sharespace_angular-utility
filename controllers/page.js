'use strict';

/**
 * @ngdoc function
 * @name tgwcAngularUtility.controller:PageCtrl
 * @description
 * # MainCtrl
 * Controller of the tgwcAngularUtility
 */
angular.module('tgwcAngularUtility',[]).controller('PageCtrl',
  ['$scope', 'DrupalPath', '$routeParams', '$sce', 'page',
  function($scope, DrupalPath, $routeParams, $sce, page) {

    $scope.page = page;

    $scope.getTemplate = function() {
      var tpl = "";
      console.log($scope.page.type);
      if ($scope.page !== undefined) {
        if ($scope.page.type !== undefined) {
          tpl = "/views/"+$scope.page.type+".html";
        }
      }
      console.log(tpl);
      return tpl;
    };

    $scope.loadStripTemplateByType = function(type) {
      var tpl = "";
      if (type !== undefined) {
        tpl = "/views/strips/"+type+".html";
      }
      return tpl;
    };

    $scope.getInlineCss = function() {
      return $sce.trustAsHtml('<style>' + $scope.page.field_css + '</style>');
    };

    //consoel.log($scope.page);
    $scope.template = $scope.getTemplate();
    
  }]);



angular.module('tgwcAngularUtility').controller('ModalCtrl', function ($scope, $modal, $log) {


$scope.open = function (size) {

    var modalInstance = $modal.open({
      templateUrl: '../views/mega-menu.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
});



angular.module('tgwcAngularUtility').controller('ModalInstanceCtrl', function ($scope, $modalInstance, items) {



  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
});


angular.module('tgwcAngularUtility').controller('chartCtrl', function ($scope) {

	$scope.percent = 65;
        
        $scope.options = {
            animate:{
                duration:0,
                enabled:false
            },
            barColor:'#2C3E50',
            scaleColor:false,
            lineWidth:20,
            lineCap:'circle',
            size:4,
            onStep: function(value) {
				$scope.percent.find('span').text(Math.round(value));
  			},
			onStop: function(value, to) {
			  $scope.percent.find('span').text(Math.round(to));
			}
        };
        


});







