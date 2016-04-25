// from https://github.com/previousdeveloper/angular-simple-countdown
// 添加i18n选项CN
// 修改interval周期为1分钟
// 修改倒数到0时显示“已过期”（hardcoded)
// 修改endDate参数可以直接接受毫秒数
(function() {
    'use strict';

    angular.module('countdownTimer', [])
        .directive('countdown', countDownTimer);

    countDownTimer.$inject = ['$interval'];

    function countDownTimer($interval) {
        return {
            restrict: 'A',
            transclude: true,
            scope: {
                lang: '@'
            },
            link: function(scope, element, attrs) {
                var countDownInterval;
                var overdueText = attrs.overdueText || '已过期';

                function displayString() {
                    var months = ["", "January", "February", "March", "April", "May", "June", "July",
                        "August", "September", "October", "November", "December"
                    ];

                    var convertedData;
                    if (angular.isNumber(attrs.endDate - 0)) {
                        convertedData = attrs.endDate - 0;
                    } else {
                        var namedMonth;
                        var splitedMonth = null;
                        var month = attrs.endDate.split('-')[0];


                        if (month.charAt(0) === '0') {

                            splitedMonth = month.slice(1);
                            namedMonth = months[splitedMonth];

                        } else {
                            namedMonth = months[month];
                        }

                        convertedData = namedMonth + " " + "," + attrs.endDate.split('-')[1] + "," + attrs.endDate.split('-')[2];
                    }

                    attrs.units = angular.isArray(attrs.units) ? attrs.units : attrs.units.split('|');
                    var lastUnit = attrs.units[attrs.units.length - 1],
                        unitConstantForMillisecs = {
                            weeks: (1000 * 60 * 60 * 24 * 7),
                            days: (1000 * 60 * 60 * 24),
                            hours: (1000 * 60 * 60),
                            minutes: (1000 * 60),
                            seconds: 1000,
                            milisaniye: 1
                        },
                        unitsLeft = {},
                        returnString = '',
                        totalMillisecsLeft = new Date(convertedData) - new Date(),
                        i,
                        unit;

                    if (totalMillisecsLeft <= 0) {
                        $interval.cancel(countDownInterval);
                        element.addClass('text-danger');
                        return overdueText;
                    }
                    for (i in attrs.units) {
                        if (attrs.units.hasOwnProperty(i)) {
                            //validation
                            unit = attrs.units[i].trim();
                            if (unitConstantForMillisecs[unit.toLowerCase()] === false) {
                                $interval.cancel(countDownInterval);
                                throw new Error('Cannot repeat unit: ' + unit);

                            }
                            if (unitConstantForMillisecs.hasOwnProperty(unit.toLowerCase()) === false) {
                                $interval.cancel(countDownInterval);
                                throw new Error('Unit: ' + unit + ' is not supported. Please use following units: hafta, gün, saat, dakika, saniye, milisaniye');
                            }

                            unitsLeft[unit] = totalMillisecsLeft / unitConstantForMillisecs[unit.toLowerCase()];


                            if (lastUnit === unit) {
                                unitsLeft[unit] = Math.ceil(unitsLeft[unit]);
                            } else {
                                unitsLeft[unit] = Math.floor(unitsLeft[unit]);
                            }

                            totalMillisecsLeft -= unitsLeft[unit] * unitConstantForMillisecs[unit.toLowerCase()];

                            unitConstantForMillisecs[unit.toLowerCase()] = false;


                            returnString += ' ' + unitsLeft[unit] + ' ' + unit;
                        }
                    }

                    return returnString;
                }


                element.on('$destroy', function() {
                    $interval.cancel(countDownInterval);
                });

                var intervalFn = function() {

                    if (scope.lang !== undefined) {
                        switch (scope.lang) {
                            case 'TR':
                                element.text(displayString()
                                    .replace('days', 'gün')
                                    .replace('hours', 'saat')
                                    .replace('minutes', 'saat')
                                    .replace('seconds', 'saniye'));
                                break;
                            case 'CN':
                                element.text(displayString()
                                    .replace('days', '天')
                                    .replace('hours', '小时')
                                    .replace('minutes', '分')
                                    .replace('seconds', '秒'));
                                break;
                            default:
                                break;

                        }
                    } else {
                        element.text(displayString());
                    }
                };
                intervalFn();
                countDownInterval = $interval(intervalFn, 1000 * 60);
            }
        };
    };

})();