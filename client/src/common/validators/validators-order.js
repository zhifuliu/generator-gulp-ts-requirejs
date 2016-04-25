(function() {
    'use strict';

    function getComparedValidator(isGreater, allowEqual) {
        return function() {
            return {
                require: 'ngModel',
                link: function(scope, elm, attrs, ctrl) {
                    var thanBase,
                        gap = attrs.gap || 0;

                    scope.$watch(attrs.than, function(newVal, oldVal) {
                        if (newVal) {
                            thanBase = angular.isDate(newVal) ? newVal.getTime() : newVal;
                            if (newVal !== oldVal) {
                                ctrl.$validate();
                            }
                        }
                    });

                    ctrl.$validators.greaterThan = function(modelValue) {
                        // disabled是由ngDisabled后期加上去的，因此动态取值
                        if (!thanBase || attrs.disabled) {
                            return true;
                        }

                        var val = angular.isDate(modelValue) ? modelValue.getTime() : modelValue,
                            comparedTo = thanBase + gap * 1000;

                        if (isGreater) {
                            return allowEqual ? val >= comparedTo : val > comparedTo;
                        } else {
                            return allowEqual ? val <= comparedTo : val < comparedTo;
                        }
                    };
                }
            };
        }
    }

    angular.module('common.validators.order', [])
        .directive('greaterThan', getComparedValidator(true))
        .directive('greaterThanEqual', getComparedValidator(true, true))
        .directive('lessThan', getComparedValidator())
        .directive('lessThanEnual', getComparedValidator(false, true));
})();