(function() {
	'use strict';

    angular
        .module('dataMapping')
        .controller('dataProviderOccurrenceController', ['$scope', 'dataProviderService', dataProviderOccurrenceController]);

    function dataProviderOccurrenceController($scope, dataProviderService) {
        
        $scope.getdataProviderOccurrenceList = function () {
        	
        	$scope.dataProviderList = dataProviderService.getOccurrenceList().dataProviderOccurrence;        	
        }
        //End
    }

})();
