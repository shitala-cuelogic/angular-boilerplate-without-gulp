(function() {
    'use strict';

    angular
        .module('dashboard')
        .controller('DashboardCtrl', ['$scope', '$state', 'baseService', DashboardCtrl]);

    function DashboardCtrl($scope, $state, baseService) {
        $scope.blackSpinner = 'assets/images/blackSpinner.gif';

        $scope.userList = function() {
            //calling API and get user list
            $scope.getUsers = baseService.getUserList().userDetails;
            $scope.topTabMenus = [{
                'topTabMenuName': 'All',
                'url': '/dashboard'
            }, {
                'topTabMenuName': 'Proposals',
                'url': 'proposals'
            }]
        }
    }

})();
