(function() {
    'use strict';

    angular
        .module('dataMapping')
        .config(['$stateProvider', stateProvider])

    function stateProvider($stateProvider) {

        $stateProvider
            .state('base.dataMapping', {
                url: '',
                abstarct: true,
                views: {
                    'content': {
                        templateUrl: 'app/modules/dataMapping/views/data-mapping.html',
                        controller: 'dataMappingController'
                    }
                }
            })
            .state('base.dataMapping.clients', {
                url: '/data-mapping/clients',
                views: {
                    'dataMapping': {
                        templateUrl: 'app/modules/dataMapping/views/clients.html',
                        controller: 'clientsController'
                    }
                }
            })
            .state('base.dataMapping.dataProviders', {
                url: '/data-mapping/data-provider',
                abstarct: function(){
                    return 'base.dataMapping.dataProviders.spend';
                },
                views: {
                    'dataMapping': {
                        templateUrl: 'app/modules/dataMapping/views/data-provider.html',   
                    }
                }
            })
            .state('base.dataMapping.dataProviders.spend', {
                url: '/data-mapping/data-provider/spend',
                views: {
                    'dataProvider': {
                        templateUrl: 'app/modules/dataMapping/views/data-provider-spend.html',
                        controller: 'dataProviderSpendController'
                        
                    }
                }
            })
            .state('base.dataMapping.dataProviders.occurrence', {
                url: '/data-mapping/data-provider/occurrence',
                views: {
                    'dataProvider': {
                        templateUrl: 'app/modules/dataMapping/views/data-provider-occurrence.html',
                        controller: 'dataProviderOccurrenceController'
                        
                    }
                }
            })
            .state('base.dataMapping.dataProviders.master-data', {
                url: '/data-mapping/data-provider/master-data',
                views: {
                    'dataProvider': {
                        templateUrl: 'app/modules/dataMapping/views/data-provider-master-data.html',
                        controller: 'dataProviderMasterDataController'
                        
                    }
                }
            })
            .state('base.dataMapping.dataProviders.creative', {
                url: '/data-mapping/data-provider/creative',
                views: {
                    'dataProvider': {
                        templateUrl: 'app/modules/dataMapping/views/data-provider-creative.html',
                        controller: 'dataProviderCreativeController'
                    }
                }
            })

    }

})();
