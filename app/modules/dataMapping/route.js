(function() {
    'use strict';

    angular
        .module('dataMapping')
        .config(['$stateProvider', stateProvider])

    function stateProvider($stateProvider) {

        $stateProvider
            .state('base.dataMapping', {
                url: '/data-mapping/spend/data-provider',
                views: {
                    'content': {
                        templateUrl: 'app/modules/dataMapping/views/data_mapping.html',
                        controller: 'dataMappingCtrl'
                    }
                }
            });
    }

})();
