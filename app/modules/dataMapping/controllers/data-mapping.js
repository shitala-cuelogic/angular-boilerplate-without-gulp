(function() {
	'use strict';

    angular
        .module('dataMapping')
        .controller('dataMappingController', ['$scope', 'commonService', dataMappingController]);

    function dataMappingController($scope, commonService) {
        
        $scope.topTabMenus = commonService.getTopDataMappingMenus();        

        $scope.leftTabMenus = commonService.getLeftDataMappingMenus();
    }

})();
