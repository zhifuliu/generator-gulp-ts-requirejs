(function() {
    'use strict';

    var guestInfo = {
        menus: [],
        user: {},
        authed: 'FAIL'
    };

    function userInfoFactory(DataServiceUser, Alerts, $cookies, $state, $interval) {
        var userInfo = {
                authed: 'UNKNOWN'
            },
            heartbeatInv,
            restorePromise,
            factory = {
                get: function() {
                    return userInfo;
                },
                clear: function() {
                    $cookies.remove('token');
                    factory.set(guestInfo);
                },
                set: function(newInfo) {
                    angular.extend(userInfo, newInfo);
                },
                login: function(credential) {
                    return DataServiceUser.login.get(credential, function(response) {
                        Alerts.show('登录成功', 'success');
                        var info = response.data;
                        info.authed = 'SUCCESS';
                        factory.set(info);
                    }, function(rejection) {
                        Alerts.show('登录失败：' + (rejection.info || '未知错误'), 'danger');
                    }).$promise;
                },
                logout: function() {
                    // 仅用于手动登出
                    factory.clear();
                    $state.go('root.welcome');
                    return DataServiceUser.logout.get().$promise;
                },
                restore: function() {
                    if (restorePromise && restorePromise.isPending()) {
                        return restorePromise;
                    }
                    return DataServiceUser.getLoginStatus.get({}, function(response) {
                        var info = response.data;
                        info.authed = 'SUCCESS';
                        factory.set(info);
                    }, function() {
                        // 服务器返回200但是未登录时，由于interceptor存在也会进入这一支
                        factory.clear();
                    }).$promise;
                },
                setHeartbeat: function(seconds) {
                    if (heartbeatInv) {
                        $interval.cancel(heartbeatInv);
                        heartbeatInv = undefined;
                    }
                    if (angular.isNumber(seconds) && seconds > 0) {
                        heartbeatInv = $interval(function() { factory.restore(); }, seconds * 1000);
                    }
                }
            };

        return factory;
    }

    angular.module('common.services.userInfo', [])
        .factory('UserInfo', userInfoFactory);
})();
