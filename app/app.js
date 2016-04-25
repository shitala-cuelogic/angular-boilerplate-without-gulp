(function() {

    'use strict';

    // Declare app level module which depends on views, and components
    angular
        .module('angularClient', [
            'ui.router',
            'ngAnimate',
            'angularLazyImg',
            'ui.bootstrap',
            'config',
            'login',
            'base',
            'dashboard',
            'user',
            'dataMapping'
        ])
        .config(['$urlRouterProvider', '$locationProvider', initializeConfigurationPhase]);

    function initializeConfigurationPhase($urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/login');
    }

})();
