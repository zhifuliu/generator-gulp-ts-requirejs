(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.welcome', {
                url: '/',
                views: {
                    '@': {
                        templateUrl: 'src/app/welcome/welcome.tpl.html',
                        controller: 'WelcomeCtrl as welcome',
                        resolve: {
                            dataSvc: 'DataServiceUser'
                        }
                    }
                }
            });
    }

    function welcomeCtrl(dataSvc, Alerts, UserInfo, $state) {
        var vm = this;
        vm.doLogin = function(form) {
            form.$setDirty(true);
            if (form.$valid) {
                UserInfo.login(vm.loginParam).then(function() {
                    $state.go('root.mgt.orders', {status: 0});
                });
            }
        };
        vm.userInfo = UserInfo.get();
    }

    angular.module('welcome', [])
        .config(config)
        .controller('WelcomeCtrl', welcomeCtrl);
})();
