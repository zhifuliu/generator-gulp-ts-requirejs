(function() {
    'use strict';

    function config($stateProvider) {
        $stateProvider
            .state('root.mgt.orders', {
                url: '/orders?{status:int}',
                views: {
                    'workbench': {
                        templateUrl: 'src/app/orders/orders.tpl.html',
                        controller: 'OrdersCtrl as orders',
                        resolve: {
                            dataSvc: 'DataServiceOrders'
                        }
                    }
                }
            });
    }

    var PROP_APPLICABLE_FOR = {
        createDate: { status: [-200] },
        subOrderTime: { status: [0, 10] },
        quotesTime: { status: [20, 50, 55, 300] },
        effectTime: { status: [55] },
        payTime: { status: [100] },
        underwriteTime: { status: [180, 350] },
        writerTime: { status: [200] },
        policyStatus: { status: [0] },
        brokerGroup: { wyOnly: true },
        contactGroup: { vendorOnly: true },
        quotesUser: { status: [0, 20, 50, 55, 100, 180, 200, 300, 350, 500, 600] },
        underwriteUser: { status: [0, 180, 200, 350, 500, 600] },
        writerUser: { status: [0, 200] },
        offGroup: { status: [600] },
        refundGroup: { status: [500] },
        followUpGroup: { status: [55, -200], wyOnly: true },
        operate: { status: [10, 20, 50, 55, 100, 180, 200, 300, 350, 500, 600, -200] },
        bTnPrice: { status: [10], vendorOnly: true },
        bTnUnderwrite: { status: [100], vendorOnly: true },
        bTnIssue: { status: [180], vendorOnly: true },
        bTnRefund: { status: [350], wyOnly: true },
        bTnClose: { status: [300], wyOnly: true }
    };

    function ordersCtrl(dataSvc, $scope, $stateParams, $uibModal, Alerts, $log, UserInfo) {

        function normalizeSearchParam() {
            var result = angular.extend({}, vm.searchParam);
            if (result.sTime && result.eTime) {
                result.sTime = result.sTime.getTime();
                // 结束时间默认24:00
                result.eTime = result.eTime.getTime() + 24 * 3600 * 1000;
            }
            result.pageNum = vm.paginationOptions.currentPage;

            return result;
        }

        function search() {
            // vm.isFetching = true;
            dataSvc.search.get(normalizeSearchParam(), function(response) {
                vm.searchResult = response.data.list;
                vm.paginationOptions.count = response.data.rowCount || 0;
                // 根据服务器端返回校正页数
                vm.paginationOptions.currentPage = response.data.num;
            }).$promise.finally(function() {
                // vm.isFetching = false;
            });
        }

        var vm = this;

        // 初始值和初始状态
        vm.searchParam = {
            policyStatus: $stateParams.status || 0,
            policySn: '',
            carNumber: '',
            mobile: '',
            isProblemOrder: ($stateParams.status == -200) ? 1 : undefined
        };
        vm.searchResult = [];
        vm.paginationOptions = {
            currentPage: 1,
            pageSize: 20,
            count: 0
        };
        vm.datePickerOpened = {};
        vm.datepickerOptions = {
            'show-weeks': false
        };
        vm.userInfo = UserInfo.get();

        // 方法们
        vm.search = search;
        vm.showOrdersProp = function(propName) {
            var applicableChecker = PROP_APPLICABLE_FOR[propName],
                authed = vm.userInfo.authed === 'SUCCESS';
            return authed && applicableChecker &&
                (!applicableChecker.status || applicableChecker.status.indexOf(vm.searchParam.policyStatus) !== -1) &&
                (!applicableChecker.wyOnly || vm.userInfo.user.company.id == 9999) &&
                (!applicableChecker.vendorOnly || vm.userInfo.user.company.id != 9999);
        };
        vm.showDetail = function(order) {
            var modalInstance = $uibModal.open({
                templateUrl: 'src/app/orders/order-detail-modal.tpl.html',
                controller: 'OrderDetailModalCtrl as orderDetail',
                size: 'lg',
                backdrop: 'static',
                windowClass: 'modal-order-detail',
                resolve: {
                    order: order
                }
            });
            modalInstance.result.then(function() {
                search();
            });
        };
        vm.followup = function(order) {
            var modalInstance = $uibModal.open({
                templateUrl: 'src/app/orders/order-followup-modal.tpl.html',
                controller: 'OrderFollowupModalCtrl as orderFollowup',
                size: 'lg',
                backdrop: 'static',
                windowClass: 'modal-order-followup',
                resolve: {
                    order: order
                }
            });
            modalInstance.result.then(function() {
                search();
            });
        };
        vm.remark = function(order) {
            var modalInstance = $uibModal.open({
                templateUrl: 'src/app/orders/order-remark-modal.tpl.html',
                controller: 'OrderRemarkModalCtrl as orderRemark',
                size: 'lg',
                backdrop: 'static',
                windowClass: 'modal-order-remark',
                resolve: {
                    order: order
                }
            });
        };
        vm.closeOrder = function(order) {
            var modalInstance = $uibModal.open({
                templateUrl: 'src/app/orders/order-close-order-modal.tpl.html',
                controller: 'OrderCloseOrderModalCtrl as orderCloseOrder',
                size: 'lg',
                backdrop: 'static',
                windowClass: 'modal-order-close-order',
                resolve: {
                    order: order
                }
            });
            modalInstance.result.then(function() {
                UserInfo.restore().then(function() {
                    search();
                });
            });
        };
        vm.confirmPrice = function(order) {
            dataSvc.checkQuotation.get({
                uuid: order.uuid
            }, function() {
                var modalInstance = $uibModal.open({
                    templateUrl: 'src/app/orders/order-confirm-price-modal.tpl.html',
                    controller: 'OrderConfirmPriceModalCtrl as orderConfirmPrice',
                    size: 'lg',
                    backdrop: 'static',
                    windowClass: 'modal-order-confirm-price',
                    resolve: {
                        order: order
                    }
                });
                modalInstance.result.then(function() {
                    UserInfo.restore().then(function() {
                        search();
                    });
                });
            }, function(response) {
                Alerts.show('确认报价失败：' + (response.info || ''), 'danger');
            });
            return;

        };
        vm.failPrice = function(order) {
            var modalInstance = $uibModal.open({
                templateUrl: 'src/app/orders/order-fail-price-modal.tpl.html',
                controller: 'OrderFailPriceModalCtrl as orderFailPrice',
                size: 'lg',
                backdrop: 'static',
                windowClass: 'modal-order-fail-price',
                resolve: {
                    order: order
                }
            });
            modalInstance.result.then(function() {
                UserInfo.restore().then(function() {
                    search();
                });
            });
        };
        vm.confirmUnderwrite = function(order) {
            var modalInstance = $uibModal.open({
                templateUrl: 'src/app/orders/order-confirm-underwrite-modal.tpl.html',
                controller: 'OrderConfirmUnderwriteModalCtrl as orderConfirmUnderwrite',
                size: 'lg',
                backdrop: 'static',
                windowClass: 'modal-order-confirm-underwrite',
                resolve: {
                    order: order
                }
            });
            modalInstance.result.then(function() {
                UserInfo.restore().then(function() {
                    search();
                });
            });
        };
        vm.rejectUnderwrite = function(order) {
            var modalInstance = $uibModal.open({
                templateUrl: 'src/app/orders/order-reject-underwrite-modal.tpl.html',
                controller: 'OrderRejectUnderwriteModalCtrl as orderRejectUnderwrite',
                size: 'lg',
                backdrop: 'static',
                windowClass: 'modal-order-reject-underwrite',
                resolve: {
                    order: order
                }
            });
            modalInstance.result.then(function() {
                UserInfo.restore().then(function() {
                    search();
                });
            });
        };
        vm.confirmIssue = function(order) {
            var modalInstance = $uibModal.open({
                templateUrl: 'src/app/orders/order-confirm-issue-modal.tpl.html',
                controller: 'OrderConfirmIssueModalCtrl as orderConfirmIssue',
                size: 'lg',
                backdrop: 'static',
                windowClass: 'modal-order-confirm-issue',
                resolve: {
                    order: order
                }
            });
            modalInstance.result.then(function() {
                UserInfo.restore().then(function() {
                    search();
                });
            });
        };
        vm.refund = function(order) {
            var modalInstance = $uibModal.open({
                templateUrl: 'src/app/orders/order-refund-modal.tpl.html',
                controller: 'OrderRefundModalCtrl as orderRefund',
                size: 'lg',
                backdrop: 'static',
                windowClass: 'modal-order-refund',
                resolve: {
                    order: order
                }
            });
            modalInstance.result.then(function() {
                UserInfo.restore().then(function() {
                    search();
                });
            });
        };
        vm.findUser = function(userId) {
            if (userId) {
                var modalInstance = $uibModal.open({
                    templateUrl: 'src/app/orders/order-user-detail-modal.tpl.html',
                    controller: 'OrderUserDetailModalCtrl as userDetail',
                    size: 'lg',
                    backdrop: 'static',
                    windowClass: 'modal-order-refund',
                    resolve: {
                        userId: userId
                    }
                });
            }
        }
        search();
    };

    function orderFollowupModalCtrl(order, $stateParams, OrderFollowUpStatusEnum, DataServiceOrders, Alerts, $scope) {
        var vm = this;

        // 初始值和初始状态
        vm.orderFollowUpStatusEnum = OrderFollowUpStatusEnum;
        // 此值更改，所以不能直接用order.followUpStatuswe
        vm.followUpStatus = order.followUpStatus;
        vm.remarks = '';
        // 兼容问题订单特殊结构
        order.uuid = order.uuid || order.policySn;

        // 方法们
        vm.close = $scope.$close;
        vm.confirm = function() {
            DataServiceOrders.modifyFollowUpStatus.formPost({
                uuid: order.uuid,
                status: vm.followUpStatus,
                remarks: vm.remarks,
                isProblemOrder: ($stateParams.status == -200) ? 1 : undefined
            }, function() {
                order.followUpStatus = vm.followUpStatus;
                vm.close();
            }, function() {
                Alerts.show('修改跟进状态失败，请重试。', 'danger');
            });
        };
    }

    function orderRemarkModalCtrl(order, DataServiceOrders, Alerts, $scope) {
        var vm = this;

        // 初始值和初始状态
        vm.remarks = '';
        // 兼容问题订单特殊结构
        order.uuid = order.uuid || order.policySn;

        DataServiceOrders.toRemarks.get({
            uuid: order.uuid
        }, function(response) {
            vm.remarkList = response.data;
        }, function() {
            Alerts.show('获取备注列表失败，请重试', 'danger');
        });

        // 方法们
        vm.dismiss = $scope.$dismiss;
        vm.confirm = function(form) {
            form.$setDirty(true);
            if (!form.$valid) {
                Alerts.show('请输入备注。', 'danger');
                return;
            }
            DataServiceOrders.addRemarks.formPost({
                uuid: order.uuid,
                content: vm.remarks
            }, function() {
                vm.dismiss();
            }, function() {
                Alerts.show('添加备注失败，请重试。', 'danger');
            });
        };
    }

    function orderCloseOrderModalCtrl(order, DataServiceOrders, Alerts, $scope) {
        var vm = this;

        // 初始值和初始状态
        vm.remarks = '';
        // 兼容问题订单特殊结构
        order.uuid = order.uuid || order.policySn;

        // 方法们
        vm.close = $scope.$close;
        vm.confirm = function(form) {
            form.$setDirty(true);
            if (!form.$valid) {
                Alerts.show('请输入关闭原因。', 'danger');
                return;
            }
            DataServiceOrders.updateStatus.formPost({
                status: 600,
                uuid: order.uuid,
                remarks: vm.remarks
            }, function() {
                vm.close();
            }, function() {
                Alerts.show('关闭订单失败，请重试。', 'danger');
            });
        };
    }

    function orderFailPriceModalCtrl(order, OrderFailPriceReasonsEnum, DataServiceOrders, Alerts, $filter, $scope) {
        var vm = this;

        function replaceOtherToUserInput() {
            var idx = vm.remarks.indexOf('其他');
            if (idx >= 0) {
                vm.otherDetail = $filter('trim')(vm.otherDetail);
                if (vm.otherDetail.length) {
                    vm.remarks.splice(idx, 1, vm.otherDetail);
                }
            }
        }

        // 初始值和初始状态
        vm.orderFailPriceReasonsEnum = OrderFailPriceReasonsEnum;
        vm.remarks = [];
        vm.otherDetail = '';
        // 兼容问题订单特殊结构
        order.uuid = order.uuid || order.policySn;

        // 方法们
        vm.close = $scope.$close;
        vm.confirm = function(form) {

            var canSubmit = false;
            if (vm.remarks.indexOf('其他') !== -1) {
                form.$setDirty(true);
                canSubmit = form.$valid;
            } else {
                canSubmit = vm.remarks.length > 0;
            }

            if (!canSubmit) {
                Alerts.show('请选择或输入报价失败原因。', 'danger');
                return;
            }
            replaceOtherToUserInput();
            DataServiceOrders.updateStatus.formPost({
                uuid: order.uuid,
                status: 20, // 报价失败
                remarks: JSON.stringify(vm.remarks)
            }, function() {
                vm.close();
            }, function() {
                Alerts.show('修改订单状态失败，请重试。', 'danger');
            });
        };
    }

    function orderConfirmPriceModalCtrl(order, DataServiceOrders, Alerts, $scope) {
        var vm = this;

        // 初始值和初始状态
        // 兼容问题订单特殊结构
        order.uuid = order.uuid || order.policySn;

        // 方法们
        vm.close = $scope.$close;
        vm.confirm = function() {
            DataServiceOrders.updateStatus.formPost({
                status: order.companyId == 1013 ? 50 : 55,
                uuid: order.uuid
            }, function() {
                vm.close();
            }, function() {
                Alerts.show('修改订单状态失败，请重试。', 'danger');
            });
        };
    }

    function orderConfirmUnderwriteModalCtrl(order, DataServiceOrders, Alerts, $scope) {
        var vm = this;

        // 初始值和初始状态
        // 兼容问题订单特殊结构
        order.uuid = order.uuid || order.policySn;

        DataServiceOrders.detail.get({
            uuid: order.uuid
        }, function(response) {
            var carInsurePolicy = response.data.carInsurePolicy;
            if (carInsurePolicy) {
                vm.detailJson = JSON.parse(carInsurePolicy.detailJson);
            }
        }, function() {
            $scope.$dismiss();
        });

        // 方法们
        vm.close = $scope.$close;
        vm.confirm = function() {
            DataServiceOrders.updateStatus.formPost({
                uuid: order.uuid,
                status: 180, // 已核保待出单
            }, function() {
                vm.close();
            }, function() {
                Alerts.show('修改订单状态失败，请重试。', 'danger');
            });
        };
    }

    function orderRejectUnderwriteModalCtrl(order, DataServiceOrders, Alerts, $scope) {
        var vm = this;

        // 初始值和初始状态
        vm.remarks = '';
        // 兼容问题订单特殊结构
        order.uuid = order.uuid || order.policySn;

        // 方法们
        vm.close = $scope.$close;
        vm.confirm = function(form) {
            form.$setDirty(true);
            if (!form.$valid) {
                Alerts.show('请输入核保不通过原因。', 'danger');
                return;
            }
            DataServiceOrders.updateStatus.formPost({
                status: 350,
                uuid: order.uuid,
                remarks: vm.remarks
            }, function() {
                vm.close();
            }, function() {
                Alerts.show('修改订单状态失败，请重试。', 'danger');
            });
        };
    }

    function orderConfirmIssueModalCtrl(order, DataServiceOrders, DeliveryVendorsEnum, Alerts, $scope) {
        var vm = this;

        // 初始值和初始状态
        vm.remarks = '';
        vm.DeliveryVendorsEnum = DeliveryVendorsEnum;
        vm.deliveryInfo = {
            company: 'EMS'
        };
        // 兼容问题订单特殊结构
        order.uuid = order.uuid || order.policySn;

        // 方法们
        vm.close = $scope.$close;
        vm.confirm = function(form) {
            form.$setDirty(true);
            if (!form.$valid) {
                Alerts.show('请输入快递和保单信息。', 'danger');
                return;
            }
            DataServiceOrders.confirmIssue.formPost(angular.extend({
                status: 200,
                uuid: order.uuid
            }, vm.deliveryInfo), function() {
                vm.close();
            }, function() {
                Alerts.show('确认出单失败，请重试。', 'danger');
            });
        };
    }

    function orderRefundModalCtrl(order, DataServiceOrders, DeliveryVendorsEnum, Alerts, $scope) {
        var vm = this;

        // 兼容问题订单特殊结构
        order.uuid = order.uuid || order.policySn;

        // 方法们
        vm.close = $scope.$close;
        vm.confirm = function() {
            DataServiceOrders.updateStatus.formPost({
                status: 500,
                uuid: order.uuid
            }, function() {
                vm.close();
            }, function() {
                Alerts.show('确认退款失败，请重试。', 'danger');
            });
        };
    }

    function orderUserDetailModalCtrl(userId, DataServiceUser) {
        var vm = this;

        DataServiceUser.findUserById.get({
            userId: userId
        }, function(response) {
            vm.info = response.data;
        });
    }

    angular.module('orders', [])
        .config(config)
        .controller('OrdersCtrl', ordersCtrl)
        .controller('OrderFollowupModalCtrl', orderFollowupModalCtrl)
        .controller('OrderRemarkModalCtrl', orderRemarkModalCtrl)
        .controller('OrderCloseOrderModalCtrl', orderCloseOrderModalCtrl)
        .controller('OrderFailPriceModalCtrl', orderFailPriceModalCtrl)
        .controller('OrderConfirmPriceModalCtrl', orderConfirmPriceModalCtrl)
        .controller('OrderConfirmUnderwriteModalCtrl', orderConfirmUnderwriteModalCtrl)
        .controller('OrderRejectUnderwriteModalCtrl', orderRejectUnderwriteModalCtrl)
        .controller('OrderConfirmIssueModalCtrl', orderConfirmIssueModalCtrl)
        .controller('OrderRefundModalCtrl', orderRefundModalCtrl)
        .controller('OrderUserDetailModalCtrl', orderUserDetailModalCtrl);
})();