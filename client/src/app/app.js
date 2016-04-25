(function() {
    'use strict';

    function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider) {
        $urlRouterProvider.otherwise('/');
        $logProvider.debugEnabled(false);
        $httpProvider.interceptors.push('httpInterceptor');
        $httpProvider.defaults.withCredentials = true;
        $stateProvider.state('root', {})
            .state('root.mgt', {
                url: '/mgt',
                views: {
                    '@': {
                        templateUrl: 'src/app/management.tpl.html'
                    }
                }
            });
    }

    function run($rootScope, $state, UserInfo, Alerts) {
        UserInfo.restore().then(function() {
            var userInfo = UserInfo.get();

            if (userInfo.authed === 'SUCCESS') {
                Alerts.show('欢迎回来，' + userInfo.user.userName, 'success');
                if ($state.is('root.welcome')) {
                    $state.go('root.mgt.orders', { status: 0 });
                }
            }
        });
        UserInfo.setHeartbeat(3 * 60);
        $rootScope.$on('loginRequired', function() {
            UserInfo.clear();
            $state.go('root.welcome');
        });
        // https://github.com/angular-ui/ui-router/issues/2255 的一个workaround，uiRouter更新支持后重新评估必要性
        $rootScope.$on('$stateChangeStart', function(evt, to, params) {
            if (to.redirectTo) {
                evt.preventDefault();
                $state.go(to.redirectTo, params)
            }
            // TODO 检查是否session lost，如果是阻止跳转，回到登录页面，并记录目的地，重新登录后重返。
            // UserInfo.restore();
            // 参考 http://stackoverflow.com/questions/22537311/angular-ui-router-login-authentication
        });
        // debug.log ui router errors
        // $rootScope.$on("$stateChangeError", console.log.bind(console));
    }

    angular.module('csApp', [
            'ngCookies',
            'ngSanitize',
            'ui.router',
            'ui.bootstrap',
            'angular.city.select',
            'countdownTimer',
            'angularUtils.directives.dirPagination',
            'ngTextTruncate',
            'checklist-model',
            'angular-clipboard',
            'welcome',
            'accounts',
            'orders',
            'orderDetail',
            'common.header',
            'common.alerts',
            'common.sidenav',
            'common.services.data',
            'common.services.userInfo',
            'common.filters.general',
            'common.filters.orders',
            'common.filters.customers',
            'common.validators.general',
            'common.validators.order',
            'common.interceptors.http',
            'templates'
        ])
        .config(config)
        .run(run)
        .value('version', '0.1.0');
})();
