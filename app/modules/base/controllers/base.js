(function() {
    'use strict';

    angular
        .module('base')
        .controller('BaseCtrl', ['$scope', '$state', 'baseService', BaseCtrl]);

    function BaseCtrl($scope, $state, baseService) {
        console.log("Inside Base controller");
        //calling API and get menus
        $scope.getMenus = baseService.getMenu().userMenu;

        $scope.toggleLeftPanel = false;
        $scope.toggleMainSection = true;

        $scope.toggleMenu = function() {
            $scope.toggleLeftPanel = !$scope.toggleLeftPanel;
            $scope.toggleMainSection = !$scope.toggleMainSection;
        }
    }

})();
