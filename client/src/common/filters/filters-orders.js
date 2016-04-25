(function() {
    'use strict';

    var ORDER_STATUS_ENUM = {
        '0': '全部订单',
        '10': '待报价',
        '20': '报价失败',
        '50': '已报价待确认',
        '55': '待用户支付',
        '100': '已支付待核保',
        '180': '已核保待出单',
        '200': '已出单',
        '300': '确认失败',
        '350': '核保失败',
        '500': '订单已退款',
        '600': '订单已关闭',
        '-200': '问题订单'
    };

    var ORDER_FOLLOWUP_STATUS_ENUM = {
        '1': '待跟进',
        '2': '跟进中',
        '3': '已跟进',
        '4': '需要再次跟进'
    };

    var ORDER_FAIL_PRICE_REASONS_ENUM = [
        '证件照片不清晰',
        '行驶证照片不清晰',
        '购车发票照片不清晰',
        '其他'
    ];

    var DELIVERY_VENDORS_ENUM = [
        'EMS',
        '顺丰',
        '圆通',
        '申通',
        '中通',
        '韵达',
        '天天'
    ];

    var GLASS_TYPE_ENUM = {
        '0': '国产',
        '1': '进口'
    };

    function orderStatus() {
        return function(enmuStatus) {
            return ORDER_STATUS_ENUM[enmuStatus] || '未知';
        };
    }

    function orderFollowupStatus() {
        return function(enmuStatus) {
            return ORDER_FOLLOWUP_STATUS_ENUM[enmuStatus] || '未知';
        };
    }

    function insureArrContainsExt() {
        return function(insureArr) {
            if (!angular.isArray(insureArr)) {
                return [];
            }
            return insureArr.filter(function(insureItem) {
                return !!insureItem.insureFlag;
            });
        }
    }

    function rmb() {
        return function(number) {
            try {
                var result = parseInt(number * 100);
                return (result % 100 == 0) ? result / 100 : (result / 100).toFixed(2);
            } catch (e) {
                return 0;
            }
        }
    }

    function compulsorySum() {
        return function(compulsory) {
            return compulsory && compulsory.insurePremium + compulsory.travelTax || 0;
        }
    }

    function commercialSum() {
        return function(commercial) {
            if (!commercial || !angular.isArray(commercial.insureList)) {
                return 0;
            }
            return commercial.insureList.reduce(function(prevSum, currentItem) {
                return prevSum + (currentItem.insurePremium || 0) + (currentItem.insurePremiumExt || 0);
            }, 0);
        }
    }

    function insurePremiumGrandTotal() {
        return function(order) {
            if (!order) {
                return 0;
            }
            return compulsorySum()(order.compulsory) + commercialSum()(order.commercial);
        }
    }

    function arrayAutoNumber(numberEvenIfAlone) {
        return function(arr) {
            if (!angular.isArray(arr)) {
                return arr | '';
            }

            if (arr.length === 1 && !numberEvenIfAlone) {
                return arr.slice();
            }
            var result = [];
            arr.forEach(function(it, idx) {
                result.push((idx + 1) + '. ' + it);
            });
            return result;
        }
    }

    function adaptiveRemarks() {
        return function(remarkStr) {
            // 普通字符串或者JSON序列化后的结果
            var result = '';
            try {
                result = JSON.parse(remarkStr);
                if (!angular.isArray(result)) {
                    result = [remarkStr];
                }
            } catch (e) {
                if (angular.isString(remarkStr)) {
                    result = remarkStr.split('\n');
                }
            }
            return arrayAutoNumber()(result);
        }
    }

    function insureAmountDesc() {
        return function(insureItem) {
            // 玻璃破碎险，insureAmount表示国产/进口，其他险种表示保额
            if (insureItem.insureCode == 'F') {
                return GLASS_TYPE_ENUM[insureItem.insureAmount] || '未知';
            }
            return insureItem.insureAmount;
        };
    }

    angular.module('common.filters.orders', [])
        .constant('OrderStatusEnum', ORDER_STATUS_ENUM)
        .constant('OrderFollowUpStatusEnum', ORDER_FOLLOWUP_STATUS_ENUM)
        .constant('OrderFailPriceReasonsEnum', ORDER_FAIL_PRICE_REASONS_ENUM)
        .constant('DeliveryVendorsEnum', DELIVERY_VENDORS_ENUM)
        .filter('orderFollowupStatus', orderFollowupStatus)
        .filter('orderStatus', orderStatus)
        .filter('insureArrContainsExt', insureArrContainsExt)
        .filter('compulsorySum', compulsorySum)
        .filter('commercialSum', commercialSum)
        .filter('insurePremiumGrandTotal', insurePremiumGrandTotal)
        .filter('adaptiveRemarks', adaptiveRemarks)
        .filter('arrayAutoNumber', arrayAutoNumber)
        .filter('rmb', rmb)
        .filter('insureAmountDesc', insureAmountDesc);
})();
