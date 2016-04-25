(function() {
    'use strict';

    function getTomorrowValue() {
        var now = new Date();
        now.setDate(now.getDate() + 1);
        now.setHours(0);
        now.setMinutes(0);
        now.setSeconds(0);
        now.setMilliseconds(0);
        return now;
    }

    function getDetailObjectFromJson(jsonStr) {
        var resultObject = JSON.parse(jsonStr);
        // 转变区域选择器格式
        resultObject.vehicleInfo.carArea = {
            city: resultObject.vehicleInfo.carCity,
            province: resultObject.vehicleInfo.carProvince
        };
        resultObject.vehicleInfo.carArea = {
            city: resultObject.vehicleInfo.carCity,
            province: resultObject.vehicleInfo.carProvince
        };
        delete resultObject.vehicleInfo.carCity;
        delete resultObject.vehicleInfo.carProvince;
        return resultObject;
    }

    function serializeDetailObject(detailObj) {
        function convertTimeProp(host, propNames) {
            if (host) {
                propNames.forEach(function(propName) {
                    if (angular.isDate(host[propName])) {
                        host[propName] = host[propName].getTime();
                    }
                });
            }
        }

        var copyObj = angular.copy(detailObj);
        // 转变区域选择器格式
        copyObj.vehicleInfo.carCity = copyObj.vehicleInfo.carArea.city;
        copyObj.vehicleInfo.carProvince = copyObj.vehicleInfo.carArea.province;
        delete copyObj.vehicleInfo.carArea;
        // 转变时间选择器格式
        convertTimeProp(copyObj.vehicleInfo, ['firstRegisterDate', 'transferDate']);
        convertTimeProp(copyObj.compulsory, ['validStartDatetime', 'validEndDatetime']);
        convertTimeProp(copyObj.commercial, ['validStartDatetime', 'validEndDatetime']);

        return JSON.stringify(copyObj);
    }

    var FORM_VISIBILITIES = {
        'distributionInfoForm': {
            status: [100, 180, 200, 350, 500, 600]
        },
        'writerForm': {
            status: [200]
        }
    };

    var EDITING_RULES = {
        '10': {
            roles: ['保险公司与该订单相关联的普通账户', 'wy_admin', 'vendor_admin']
        },
        '55': {
            roles: ['保险公司与该订单相关联的普通账户', 'wy_admin', 'vendor_admin']
        },
        '100': {
            roles: ['保险公司与该订单相关联的普通账户', 'wy_admin', 'vendor_admin'],
            excludeForms: ['insurePolicyForm']
        },
        '180': {
            roles: ['保险公司与该订单相关联的普通账户', 'wy_admin', 'vendor_admin'],
            excludeForms: ['insurePolicyForm']
        },
        '200': {
            roles: ['保险公司与该订单相关联的普通账户', 'vendor_admin'],
            includeForms: ['deliveryInfoForm', 'writerForm']
        },
        '350': {
            roles: ['保险公司与该订单相关联的普通账户', 'wy_admin', 'vendor_admin'],
            excludeForms: ['insurePolicyForm']
        },
        '-200': {
            roles: ['wy_admin']
        }
    }

    function orderDetailModalCtrl(order, UserInfo, OrderStatusEnum, DeliveryVendorsEnum, RMB_FMT, IdTypesEnum, DataServiceOrders, Alerts, $scope) {
        var vm = this;
        vm.userInfo = UserInfo.get();

        // 初始值和初始状态
        vm.formats = {
            rmb: RMB_FMT
        };
        vm.DeliveryVendorsEnum = DeliveryVendorsEnum;
        vm.OrderStatusEnum = OrderStatusEnum;
        vm.idTypesEnum = IdTypesEnum;
        vm.order = order;
        order.uuid = order.uuid || order.policySn;
        DataServiceOrders.detail.get({
            uuid: order.uuid
        }, function(response) {
            vm.carInsurePolicy = response.data.carInsurePolicy;
            vm.operateLogList = response.data.operateLogList;
            if (vm.carInsurePolicy) {
                vm.carInsurePolicy.detailObject = getDetailObjectFromJson(vm.carInsurePolicy.detailJson);
            }
        }, function() {
            $scope.$dismiss();
        });
        DataServiceOrders.toRemarks.get({
            uuid: order.uuid
        }, function(response) {
            vm.remarkList = response.data;
        }, function() {});
        vm.contentType = 'order';

        // TODO 替换省市县选择器控件，或修改控件直接将用户输入写入model
        vm.datepickerOptions = {
            'show-weeks': false,
            datePickerMode: 'day',
            tomorrow: getTomorrowValue()
        };

        vm.datePickerOpened = {};
        vm.timepickerOptions = {
            showMerdian: false,
            showSpinners: true,
            mousewheel: false,
            mstep: 5
        };

        // 方法们
        vm.openDatePicker = function(pickerName) {
            vm.datePickerOpened[pickerName] = true;
        };
        vm.isVisible = function(sectionName) {
            var statusCode = vm.carInsurePolicy && vm.carInsurePolicy.statusCode || 0,
                rule = FORM_VISIBILITIES[sectionName];
            return !rule || rule.status.indexOf(statusCode) !== -1;
        };
        vm.isEditable = function(sectionName) {
            var statusCode = vm.carInsurePolicy && vm.carInsurePolicy.statusCode || 0,
                rule = EDITING_RULES[statusCode];
            return !!vm.carInsurePolicy && !!rule &&
                (!rule.includeForms || rule.includeForms.indexOf(sectionName) !== -1) &&
                (!rule.excludeForms || rule.excludeForms.indexOf(sectionName) === -1);
        };
        $scope.$on('onCitySelected', function(event, selectedArea) {
            if (event.targetScope.name === 'carArea') {
                vm.carInsurePolicy.detailObject.vehicleInfo.carArea.city = selectedArea.city;
                vm.carInsurePolicy.detailObject.vehicleInfo.carArea.province = selectedArea.province;
            } else {
                vm.carInsurePolicy.detailObject.distributionInfo.receiverArea = selectedArea.city;
            }
        });
        vm.notifyCopied = function() {
            Alerts.show('已拷贝到剪贴板', 'success');
        };
        vm.editForm = function(form) {
            form.inEdit = true;
            vm.datepickerOptions.tomorrow = getTomorrowValue();
        };
        vm.saveChanges = function(form) {
            if (form.$pristine) {
                Alerts.show('并没有改动任何信息', 'warning');
                form.inEdit = false;
            } else if (form.$invalid) {
                // TODO 使用tooltip代替Alerts
                Alerts.show('请修改输入错误后再次保存。', 'danger');
            } else {
                form.inEdit = false;
                vm.carInsurePolicy.detailJson = serializeDetailObject(vm.carInsurePolicy.detailObject);
                DataServiceOrders.editDetail.formPost({
                    uuid: order.uuid,
                    detail: vm.carInsurePolicy.detailJson
                }, function(response) {
                    Alerts.show('保存成功。', 'success');
                    if (response.data) {
                        vm.operateLogList.push(response.data);
                    }
                }, function() {
                    Alerts.show('保存改动到服务器失败，请重试', 'danger');
                    form.inEdit = true;
                });
            }
        };
        vm.cancelChanges = function(form) {
            form.inEdit = false;
            form.$setPristine();
            form.$setUntouched();
            vm.carInsurePolicy.detailObject = getDetailObjectFromJson(vm.carInsurePolicy.detailJson);
        }
    }

    angular.module('orderDetail', [])
        .controller('OrderDetailModalCtrl', orderDetailModalCtrl);
})();