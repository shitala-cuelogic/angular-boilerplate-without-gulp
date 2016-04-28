(function() {
	'use strict';    
	
    angular
        .module('dataMapping')
        .controller('dataProviderSpendController', ['$scope', 'dataProviderService', dataProviderSpendController]);

    function dataProviderSpendController($scope, dataProviderService) {
        
        $scope.getdataProviderSpendList = function () {
        	
        	$scope.dataProviderList = dataProviderService.getSpendList().dataProviderSpend;
        }
        //End
    }

})();
