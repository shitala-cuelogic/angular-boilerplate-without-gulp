(function() {
    'use strict';

    angular
        .module('dataProvider.directive', [])
        .directive("providerList", providerList);

    function providerList() {
        
        return {
            restrict: "E",
            templateUrl: "app/directives/data-mapping/views/data-provider-list.html"
        };
        //End return
    }

})();
