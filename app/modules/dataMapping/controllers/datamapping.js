(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('dataMappingCtrl', ['$scope', dataMappingCtrl]);

    function dataMappingCtrl($scope) {
        $scope.topTabMenus = [{
                'topTabMenuName': 'Data Providers',
                'url': '/data-mapping/spend/data-provider'
            }, {
                'topTabMenuName': 'Clients',
                'url': '/client-list'
            }];
            //End

        $scope.leftTabMenus = [{
                'leftTabMenuName': 'Spend',
                'url': '/data-mapping/spend/data-provider'
            }, {
                'leftTabMenuName': 'Occurrence',
                'url': '/data-mapping/occurrence/data-provider'
            }, {
                'leftTabMenuName': 'Master Data',
                'url': '/data-mapping/master-data/data-provider'
            }, {
                'leftTabMenuName': 'Creative',
                'url': '/data-mapping/creative/data-provider'
            }];
            //End
    }

})();
