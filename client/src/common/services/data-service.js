(function() {
    'use strict';

    var DEBUG, TEST;
    
    DEBUG = true;
    // TEST = true;

    // var baseUrl = TEST ? 'http://test.winbaoxian.com/car_insurance' : DEBUG ? window.location.origin : window.location.origin + '/car_insurance';

    var baseUrl = TEST ? 'http://test.winbaoxian.com/car_insurance' : DEBUG ? window.location.origin : window.location.origin + '/car_insurance';
    
    function generateServiceGroup(res, serialize, serviceBucket, serviceApiArr) {
        var group = {};

        serviceApiArr.forEach(function(key) {
            group[key] = res([baseUrl, serviceBucket, key].join('/'), {}, {
                formPost: {
                    method: 'POST',
                    transformRequest: serialize,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                    }
                }
            });
        });

        return group;
    }


    function dataServiceOrders($resource, $httpParamSerializerJQLike) {
        return generateServiceGroup($resource, $httpParamSerializerJQLike, 'order', ['search', 'detail', 'toRemarks', 'modifyFollowUpStatus', 'addRemarks', 'confirmIssue', 'updateStatus', 'checkQuotation', 'editDetail']);
    }

    function dataServiceUser($resource, $httpParamSerializerJQLike) {
        return generateServiceGroup($resource, $httpParamSerializerJQLike, 'user', ['login', 'logout', 'getLoginStatus','findUserById']);
    }

    angular.module('common.services.data', ['ngResource'])
        .factory('DataServiceUser', dataServiceUser)
        .factory('DataServiceOrders', dataServiceOrders);
})();
