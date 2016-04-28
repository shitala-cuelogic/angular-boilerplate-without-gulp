'use strict';

(function() {
    
    angular
        .module('dataMapping')
        .controller('clientsController', ['$scope', clientsController]);

    function clientsController($scope) {
        console.log("Clients")
    }

})();
