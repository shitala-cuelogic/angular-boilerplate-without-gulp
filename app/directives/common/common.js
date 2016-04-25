angular.module('common.directive', [])
    .directive("topTabMenu", topTabMenu)
    .directive("leftTabMenu", leftTabMenu);

function topTabMenu() {
    return {
        restrict: "E",
        scope: {
            "topTabMenuList": "="
        },
        templateUrl: "app/directives/common/views/top_tab_menu.html",
        controller: ['$scope', '$location', function($scope, $location) {

            $scope.topTabMenus = function() {

                var increment = 0;

                angular.forEach($scope.topTabMenuList, function(menu) {

                    $scope.topTabMenuList[increment]["activeCls"] = '';

                    if (menu.url == $location.url()) {
                        $scope.topTabMenuList[increment]["activeCls"] = 'active';
                    }
                    increment++;
                });
                return $scope.topTabMenuList;
            };
        }]
    };
}

function leftTabMenu() {
    return {
        restrict: "E",
        scope: {
            "leftTabMenuList": "="
        },
        templateUrl: "app/directives/common/views/left_tab_menu.html",
        controller: ['$scope', '$location', function($scope, $location) {

            $scope.leftTabMenus = function() {

                var increment = 0;

                angular.forEach($scope.leftTabMenuList, function(menu) {

                    $scope.leftTabMenuList[increment]["activeCls"] = '';

                    if (menu.url == $location.url()) {
                        $scope.leftTabMenuList[increment]["activeCls"] = 'active';
                    }
                    increment++;
                });
                
                return $scope.leftTabMenuList;
            };
        }]
    };
}
