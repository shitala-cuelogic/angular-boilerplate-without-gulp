angular.module('common.directive', [])
    .directive("topTabMenu", topTabMenu)
    .directive("leftTabMenu", leftTabMenu);

function topTabMenu() {
    return {
        restrict: "E",
        scope: {
            "topTabMenuList": "="
        },
        templateUrl: "app/directives/common/views/top_tab_menu.html"
    };
}

function leftTabMenu() {
    return {
        restrict: "E",
        scope: {
            "leftTabMenuList": "="
        },
        templateUrl: "app/directives/common/views/left_tab_menu.html"
    };
}
