angular.module('common.service', [])
    .factory('commonService', ['$http', commonService]);



function commonService($http) {
    var service = {};

    service.getTopDataMappingMenus = getTopDataMappingMenus;
    service.getLeftDataMappingMenus = getLeftDataMappingMenus;

    return service;

    function getTopDataMappingMenus() {
        var topMenus = {};

        return topMenus = [{
            'topTabMenuName': 'Data Providers',
            'state': 'base.dataMapping.dataProviders'
        }, {
            'topTabMenuName': 'Clients',
            'state': 'base.dataMapping.clients'
        }];
    }
    //End

    function getLeftDataMappingMenus() {
        var leftMenus = {};
        return leftMenus = [{
            'leftTabMenuName': 'Spend',
            'state': 'base.dataMapping.dataProviders.spend'
        }, {
            'leftTabMenuName': 'Occurrence',
            'state': 'base.dataMapping.dataProviders.occurrence'
        }, {
            'leftTabMenuName': 'Master Data',
            'state': 'base.dataMapping.dataProviders.master-data'
        }, {
            'leftTabMenuName': 'Creative',
            'state': 'base.dataMapping.dataProviders.creative'
        }];
        //End
    }
    //End
};
