(function() {
    'use strict';

    var ID_TYPES_ENUM = {
        1: '身份证',
        2: '护照',
        3: '驾照',
        4: '港澳通行证',
        5: '军官证',
        6: '其他'
    };

    function idType() {
        return function(type) {
            return ID_TYPES_ENUM[type] || '';
        };
    }

    angular.module('common.filters.customers', [])
        .constant('IdTypesEnum', ID_TYPES_ENUM)
        .filter('idType', idType);
})();
