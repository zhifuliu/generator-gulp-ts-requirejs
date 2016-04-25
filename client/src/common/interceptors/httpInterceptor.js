(function() {
    'use strict';

    function httpInterceptor($q, $log, $rootScope) {
        return {
            request: function(config) {
                return config;
            },
            requestError: function(rejection) {
                $log.debug(rejection);
                return $q.reject(rejection);
            },
            response: function(response) {
                $log.debug('response: ', response);
                if (angular.isObject(response.data) && !response.data.success) {
                    if (response.data.code == 3) {
                      $rootScope.$emit('loginRequired');
                    }
                    // AJAX API调用成功，但操作未成功
                    return $q.reject(response.data);
                }
                return response;
            },
            responseError: function(rejection) {
                $log.debug(rejection);
                return $q.reject({
                  info: '网络或服务器状态异常，请重试'
                });
            }
        };
    }

    angular.module('common.interceptors.http', [])
        .factory('httpInterceptor', httpInterceptor);
})();
