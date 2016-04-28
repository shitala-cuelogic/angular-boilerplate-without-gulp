(function() {
	'use strict';

    angular
        .module('dataMapping')
        .controller('dataProviderCreativeController', ['$scope', 'dataProviderService' ,dataProviderCreativeController]);

    function dataProviderCreativeController($scope, dataProviderService) {
        
        $scope.getdataProviderCreativeList = function () {
        	
        	$scope.dataProviderList = dataProviderService.getCreativeList().dataProviderCreative;        	
        }
        //End
    }

})();
