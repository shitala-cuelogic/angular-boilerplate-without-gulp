(function() {
	'use strict';
	    
    angular
        .module('dataMapping')
        .controller('dataProviderMasterDataController', ['$scope', 'dataProviderService', dataProviderMasterDataController]);

    function dataProviderMasterDataController($scope, dataProviderService) {
        
        $scope.getdataProviderMasterDataList = function () {
        	
        	$scope.dataProviderList = dataProviderService.getMasterDataList().dataProviderMasterData;        	
        }
        //End
    }

})();
