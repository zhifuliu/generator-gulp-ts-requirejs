(function() {
    'use strict';

    function mobile() {
        function isValidMobile(string) {
            return /^1\d{10}$/g.test(string);
        }

        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                ctrl.$validators.mobile = function(modelValue, viewValue) {
                    return isValidMobile(viewValue);
                };
            }
        };
    }

    function idNo(IDNoParser) {
        return {
            require: 'ngModel',
            link: function(scope, elm, attrs, ctrl) {
                var idType;

                scope.$watch(attrs.idTypeProp, function(value) {
                    idType = value;
                    ctrl.$validate();
                });

                ctrl.$validators.idNo = function(modelValue, viewValue) {
                    return idType !== 1 || IDNoParser.isValid(viewValue);
                };
            }
        };
    }

    angular.module('common.validators.general', [])
        .factory('IDNoParser', ['$window', function($window) {
            return new $window.IDValidator();
        }])
        .directive('mobile', mobile)
        .directive('idNo', idNo);
})();