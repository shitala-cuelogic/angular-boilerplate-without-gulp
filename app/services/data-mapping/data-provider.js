(function() {
    'use strict';
    angular
        .module('dataProvider.service', [])
        .factory('dataProviderService', ['$http', dataProviderService]);


    function dataProviderService($http) {
        var service = {};

        service.getSpendList = getSpendList;
        service.getOccurrenceList = getOccurrenceList;
        service.getMasterDataList = getMasterDataList;
        service.getCreativeList = getCreativeList;

        return service;

        /**
         * Get the spend list.
         *
         * @method     getSpendList
         * @return     object Spend list.
         */
        function getSpendList () {
            var spendList = {};

            return  spendList = {
                'dataProviderSpend' : [{
                    'providerName' : 'Kantar Hungary',
                    'dateReceived' : '10th Mar 2016'
                },{
                    'providerName' : 'Neilsen Us',
                    'dateReceived' : '7th Jan 2016'
                },{
                    'providerName' : 'Prasanna',
                    'dateReceived' : '5th Feb 2015'
                }]
            };
        }
        //End
        
        /**
         * Get the Occurrence list.
         *
         * @method     getOccurrenceList
         * @return     object Occurrence list.
         */
        function getOccurrenceList () {
            var occurrenceList = {};

            return  occurrenceList = {
                'dataProviderOccurrence' : [{
                    'providerName' : 'Hungary',
                    'dateReceived' : '10th Mar 2016'
                },{
                    'providerName' : 'Neilsen Us',
                    'dateReceived' : '7th Jan 2016'
                },{
                    'providerName' : 'Prasanna',
                    'dateReceived' : '5th Feb 2015'
                },{
                    'providerName' : 'Kantar',
                    'dateReceived' : '6th Mar 2016'
                },{
                    'providerName' : 'Us',
                    'dateReceived' : '7th Jan 2016'
                }]
            };
        }
        //End
        
        /**
         * Get the Master Data list.
         *
         * @method     getMasterDataList
         * @return     object Master Data list.
         */
        function getMasterDataList () {
            var masterDataList = {};

            return  masterDataList = {
                'dataProviderMasterData' : [{
                    'providerName' : 'Hungary masterData',
                    'dateReceived' : '10th Mar 2016'
                },{
                    'providerName' : 'Neilsen Us masterData',
                    'dateReceived' : '7th Jan 2016'
                },{
                    'providerName' : 'Prasanna masterData',
                    'dateReceived' : '5th Feb 2015'
                },{
                    'providerName' : 'Kantar masterData',
                    'dateReceived' : '6th Mar 2016'
                },{
                    'providerName' : 'masterData Us',
                    'dateReceived' : '7th Jan 2016'
                }]
            };
        }
        //End
        
        /**
         * Get the Creative list.
         *
         * @method     getCreativeList
         * @return     object Master Data list.
         */
        function getCreativeList () {
            var creativeList = {};

            return  creativeList = {
                'dataProviderCreative' : [{
                    'providerName' : 'Hungary Creative',
                    'dateReceived' : '10th Mar 2016'
                },{
                    'providerName' : 'Neilsen Us Creative',
                    'dateReceived' : '7th Jan 2016'
                },{
                    'providerName' : 'Prasanna Creative',
                    'dateReceived' : '5th Feb 2015'
                },{
                    'providerName' : 'Kantar Creative',
                    'dateReceived' : '6th Mar 2016'
                },{
                    'providerName' : 'Us Creative',
                    'dateReceived' : '7th Jan 2016'
                }]
            };
        }
        //End
        
    };

})();
