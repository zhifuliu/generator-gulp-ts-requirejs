(function() {
    'use strict';

    function alertsFactory() {
        var alerts = [],
            factory = {};

        angular.extend(factory, {
            get: function() {
                return alerts;
            },
            clear: function() {
                alerts.length = 0;
            },
            show: function(msg, typeStr) {
                alerts.push({
                    type: typeStr,
                    msg: msg
                });
            },
            replace: function(msg, typeStr) {
                factory.clear();
                factory.show(msg, typeStr);
            },
            close: function(idx) {
                alerts.splice(idx, 1);
            }
        });

        return factory;
    }

    function alertsCtrl($scope, Alerts) {
        var vm = this;
        vm.items = Alerts.get();
        vm.closeAlert = function(idx) {
            Alerts.close(idx);
        };
    };

    angular.module('common.alerts', [])
        .factory('Alerts', alertsFactory)
        .controller('AlertsCtrl', alertsCtrl);
})();
