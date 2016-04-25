(function() {
    'use strict';

    var RMB_FMT = /^\d+(\.\d{1,2})?$/;

    function uppercase() {
        return function(text) {
            return text ? text.toUpperCase() : text;
        };
    }

    function trim() {
        return function(text) {
            return angular.isString(text) ? text.replace(/\b/g, '') : text;
        }
    }

    angular.module('common.filters.general', [])
        .constant('RMB_FMT', RMB_FMT)
        .filter('uppercase', uppercase)
        .filter('trim', trim);
})();