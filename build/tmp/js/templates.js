(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/management.tpl.html",
    "<header>\n" +
    "  <ng-include src=\"'src/common/header.tpl.html'\">\n" +
    "</header>\n" +
    "<div class=\"sidenav\">\n" +
    "  <ng-include src=\"'src/common/sidenav.tpl.html'\">\n" +
    "</div>\n" +
    "<div class=\"l-with-nav\" ui-view=\"workbench\"></div>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/common/header.tpl.html",
    "<nav class=\"navbar navbar-inverse\" ng-controller=\"HeaderCtrl as header\">\n" +
    "  <div class=\"container-fluid\">\n" +
    "    <div class=\"navbar-header\">\n" +
    "      <a class=\"navbar-brand\" ui-sref=\"root.mgt.orders({status: 0})\">\n" +
    "        微易车险管理系统\n" +
    "      </a>\n" +
    "    </div>\n" +
    "    <div>\n" +
    "      <ul class=\"nav navbar-nav navbar-right\" ng-if=\"header.userInfo.authed === 'SUCCESS'\">\n" +
    "        <li><a href=\"javascript:;\"><span class=\"glyphicon glyphicon-user\"></span> {{header.userInfo.user.userName}}</a></li>\n" +
    "        <li><a href=\"javascript:;\" ng-click=\"header.logout()\"><span class=\"glyphicon glyphicon-log-out\"></span> 安全退出</a></li>\n" +
    "      </ul>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</nav>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/common/sidenav.tpl.html",
    "<ul class=\"nav nav-pills nav-stacked\" ng-controller=\"SidenavCtrl as sidenav\">\n" +
    "    <li ng-repeat=\"menu in sidenav.userInfo.menus\" ui-sref-active=\"active\">\n" +
    "        <a ng-if=\"menu.statusCode !== -100\" ui-sref=\"root.mgt.orders({status: menu.statusCode})\"><span class=\"glyphicon glyphicon-th-list\"></span><span class=\"hidden-xs hidden-sm\"> {{menu.statusCode | orderStatus}}（{{menu.orderCount}}）</span></a>\n" +
    "        <a ng-if=\"menu.statusCode === -100\" ui-sref=\"root.mgt.accounts\"><span class=\"glyphicon glyphicon-user\"></span><span class=\"hidden-xs hidden-sm\"> {{menu.menuName}}</span></a>\n" +
    "    </li>\n" +
    "</ul>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/accounts/accounts.tpl.html",
    "<h4>暂时使用预定义帐号，帐号管理功能敬请期待</h4>\n" +
    "<div ng-show=\"false\">\n" +
    "<div class=\"well\">\n" +
    "  <h4>Dashboard</h4>\n" +
    "  <p>Some text..</p>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-sm-3\">\n" +
    "    <div class=\"well\">\n" +
    "      <h4>Users</h4>\n" +
    "      <p>1 Million</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-3\">\n" +
    "    <div class=\"well\">\n" +
    "      <h4>Pages</h4>\n" +
    "      <p>100 Million</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-3\">\n" +
    "    <div class=\"well\">\n" +
    "      <h4>Sessions</h4>\n" +
    "      <p>10 Million</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-3\">\n" +
    "    <div class=\"well\">\n" +
    "      <h4>Bounce</h4>\n" +
    "      <p>30%</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-sm-4\">\n" +
    "    <div class=\"well\">\n" +
    "      <p>Text</p>\n" +
    "      <p>Text</p>\n" +
    "      <p>Text</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-4\">\n" +
    "    <div class=\"well\">\n" +
    "      <p>Text</p>\n" +
    "      <p>Text</p>\n" +
    "      <p>Text</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-4\">\n" +
    "    <div class=\"well\">\n" +
    "      <p>Text</p>\n" +
    "      <p>Text</p>\n" +
    "      <p>Text</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "<div class=\"row\">\n" +
    "  <div class=\"col-sm-8\">\n" +
    "    <div class=\"well\">\n" +
    "      <p>Text</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-sm-4\">\n" +
    "    <div class=\"well\">\n" +
    "      <p>Text</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/orders/order-close-order-modal.tpl.html",
    "<div class=\"modal-header\">\n" +
    "    <h3 class=\"modal-title\">关闭订单</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "    <form novalidate name=\"formCloseOrder\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label>关闭原因：</label>\n" +
    "            <textarea class=\"form-control\" ng-model=\"orderCloseOrder.remarks\" rows=\"5\" required=\"true\"></textarea>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"orderCloseOrder.confirm(formCloseOrder)\">确定</button>\n" +
    "    <button class=\"btn btn-info\" type=\"button\" ng-click=\"$dismiss()\">取消</button>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/orders/order-confirm-issue-modal.tpl.html",
    "<div class=\"modal-header\">\n" +
    "    <h3 class=\"modal-title\">出单确认</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "    <form class=\"form-horizontal\" novalidate name=\"formConfirmIssue\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">快递公司：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <select ng-model=\"orderConfirmIssue.deliveryInfo.company\" class=\"form-control\" ng-options=\"vendor for vendor in orderConfirmIssue.DeliveryVendorsEnum\" required=\"true\"></select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">快递单号：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"text\" ng-model=\"orderConfirmIssue.deliveryInfo.serialNo\" class=\"form-control\" required=\"true\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">交强险保单号：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"text\" ng-model=\"orderConfirmIssue.deliveryInfo.compulsoryInsuranceNo\" class=\"form-control\" required=\"true\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">商业险保单号：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"text\" ng-model=\"orderConfirmIssue.deliveryInfo.cmmercialInsuranceNo\" class=\"form-control\" required=\"true\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"orderConfirmIssue.confirm(formConfirmIssue)\">确定</button>\n" +
    "    <button class=\"btn btn-info\" type=\"button\" ng-click=\"$dismiss()\">取消</button>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/orders/order-confirm-price-modal.tpl.html",
    "<div class=\"modal-header\">\n" +
    "    <h3 class=\"modal-title\">确定报价</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "<div>是否确定报价？</div>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"orderConfirmPrice.confirm()\">确定</button>\n" +
    "    <button class=\"btn btn-info\" type=\"button\" ng-click=\"$dismiss()\">取消</button>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/orders/order-confirm-underwrite-modal.tpl.html",
    "<div class=\"modal-header\">\n" +
    "    <h3 class=\"modal-title\">信息确认</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "    <div ng-if=\"orderConfirmUnderwrite.detailJson == 'pending'\">正在获取保单信息...</div>\n" +
    "    <div ng-if=\"orderConfirmUnderwrite.detailJson == 'fail'\">获取保单信息失败，请重试。</div>\n" +
    "    <form class=\"form-horizontal\" ng-if=\"orderConfirmUnderwrite.detailJson.vehicleInfo\" novalidate>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">车牌号：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <p class=\"form-control-static text-primary\">{{orderConfirmUnderwrite.detailJson.vehicleInfo.licenseNo}}元</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">总保费：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <p class=\"form-control-static text-primary\">{{orderConfirmUnderwrite.carInsurePolicy.detailJson | insurePremiumGrandTotal | rmb}}元</p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button ng-if=\"orderConfirmUnderwrite.detailJson.vehicleInfo\" class=\"btn btn-primary\" type=\"button\" ng-click=\"orderConfirmUnderwrite.confirm()\">确定</button>\n" +
    "    <button class=\"btn btn-info\" type=\"button\" ng-click=\"$dismiss()\">取消</button>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/orders/order-detail-modal.tpl.html",
    "<div class=\"modal-header\">\n" +
    "    <div class=\"btn-group text-cent\">\n" +
    "        <button class=\"btn btn-primary\" ng-model=\"orderDetail.contentType\" uib-btn-radio=\"'order'\">订单详情</button>\n" +
    "        <button class=\"btn btn-primary\" ng-model=\"orderDetail.contentType\" uib-btn-radio=\"'operate'\">操作记录</button>\n" +
    "        <button class=\"btn btn-primary\" ng-model=\"orderDetail.contentType\" uib-btn-radio=\"'remark'\">备注</button>\n" +
    "    </div>\n" +
    "    <div class=\"btn-group text-cent pull-right\">\n" +
    "        <button class=\"btn btn-info\" ng-click=\"$dismiss()\">取消</button>\n" +
    "    </div>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ng-if=\"orderDetail.contentType === 'order'\">\n" +
    "    <form class=\"form-horizontal\" novalidate name=\"infoForm\">\n" +
    "        <h4>订单信息：</h4>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">订单号：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"text\" ng-model=\"orderDetail.order.policySn\" class=\"form-control\" readonly=\"true\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">订单状态：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <select ng-model=\"orderDetail.carInsurePolicy.statusCode\" class=\"form-control\" ng-options=\"code*1 as desc for (code, desc) in orderDetail.OrderStatusEnum\" disabled=\"true\"></select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <form class=\"form-horizontal\" novalidate name=\"contactForm\">\n" +
    "        <h4>车辆联系人：\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-hide=\"contactForm.inEdit\" ng-click=\"contactForm.inEdit = true\">编辑</button>\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-show=\"contactForm.inEdit\" ng-click=\"orderDetail.saveChanges(contactForm)\">保存</button>\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-show=\"contactForm.inEdit\" ng-click=\"orderDetail.cancelChanges(contactForm)\">取消</button>\n" +
    "        </h4>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">姓名：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"text\" name=\"applicantName\" ng-model=\"orderDetail.carInsurePolicy.detailObject.applicantInfo.applicantName\" class=\"form-control\" ng-readonly=\"!contactForm.inEdit\" ng-required=\"true\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">手机号码：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"tel\" name=\"applicantMobile\" ng-model=\"orderDetail.carInsurePolicy.detailObject.applicantInfo.applicantMobile\" class=\"form-control\" ng-readonly=\"!contactForm.inEdit\" mobile>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <form class=\"form-horizontal\" novalidate name=\"agentForm\">\n" +
    "        <h4>经纪人信息：</h4>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">姓名：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"text\" ng-model=\"orderDetail.order.nickName\" class=\"form-control\" readonly=\"true\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">手机号码：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"tel\" ng-model=\"orderDetail.order.mobile\" class=\"form-control\" readonly=\"true\" mobile>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <form class=\"form-horizontal\" novalidate name=\"carCityForm\">\n" +
    "        <h4>承保地区：\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-hide=\"carCityForm.inEdit\" ng-click=\"carCityForm.inEdit = true\">编辑</button>\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-show=\"carCityForm.inEdit\" ng-click=\"orderDetail.saveChanges(carCityForm)\">保存</button>\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-show=\"carCityForm.inEdit\" ng-click=\"orderDetail.cancelChanges(carCityForm)\">取消</button>\n" +
    "        </h4>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">承保地区：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <city-select name=\"carArea\" ng-model=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.carArea.city\" ng-readonly=\"!carCityForm.inEdit\"></city-select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <form class=\"form-horizontal\" novalidate name=\"driverForm\">\n" +
    "        <h4>车主信息：\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-hide=\"driverForm.inEdit\" ng-click=\"driverForm.inEdit = true\">编辑</button>\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-show=\"driverForm.inEdit\" ng-click=\"orderDetail.saveChanges(driverForm)\">保存</button>\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-show=\"driverForm.inEdit\" ng-click=\"orderDetail.cancelChanges(driverForm)\">取消</button>\n" +
    "        </h4>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">车主姓名：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input type=\"text\" ng-model=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.driverName\" class=\"form-control\" ng-readonly=\"!driverForm.inEdit\">\n" +
    "                    <span class=\"input-group-btn\"><button clipboard on-copied=\"orderDetail.notifyCopied()\" text=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.driverName\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-copy\"></span></button>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">证件类型：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <select ng-model=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.driverIdentifyType\" class=\"form-control\" ng-options=\"code*1 as desc for (code, desc) in orderDetail.idTypesEnum\" ng-disabled=\"!driverForm.inEdit\"></select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">证件号码：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input type=\"text\" ng-model=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.driverIdentifyNumber\" id-type-prop=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.driverIdentifyType\" class=\"form-control\" ng-readonly=\"!driverForm.inEdit\" id-no>\n" +
    "                    <span class=\"input-group-btn\"><button clipboard on-copied=\"orderDetail.notifyCopied()\" text=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.driverIdentifyNumber\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-copy\"></span></button>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                <div class=\"hint\">点击图片进行放大和缩小</div>\n" +
    "                <img ng-src=\"{{orderDetail.carInsurePolicy.detailObject.insuredInfo.insuredIdentifyImage}}\" alt=\"车主身份证照片\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <form class=\"form-horizontal\" novalidate name=\"vehicleInfoForm\">\n" +
    "        <h4>车辆信息：\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-hide=\"vehicleInfoForm.inEdit\" ng-click=\"vehicleInfoForm.inEdit = true\">编辑</button>\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-show=\"vehicleInfoForm.inEdit\" ng-click=\"orderDetail.saveChanges(vehicleInfoForm)\">保存</button>\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-show=\"vehicleInfoForm.inEdit\" ng-click=\"orderDetail.cancelChanges(vehicleInfoForm)\">取消</button>\n" +
    "        </h4>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">车牌号：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input type=\"text\" ng-model=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.licenseNo\" class=\"form-control\" ng-readonly=\"!vehicleInfoForm.inEdit\">\n" +
    "                    <span class=\"input-group-btn\"><button clipboard on-copied=\"orderDetail.notifyCopied()\" text=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.licenseNo\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-copy\"></span></button>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">车辆型号：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input type=\"text\" ng-model=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.carType\" class=\"form-control\" ng-readonly=\"!vehicleInfoForm.inEdit\">\n" +
    "                    <span class=\"input-group-btn\"><button clipboard on-copied=\"orderDetail.notifyCopied()\" text=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.carType\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-copy\"></span></button>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">车架号：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input type=\"text\" ng-model=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.vin\" class=\"form-control\" ng-readonly=\"!vehicleInfoForm.inEdit\">\n" +
    "                    <span class=\"input-group-btn\"><button clipboard on-copied=\"orderDetail.notifyCopied()\" text=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.vin\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-copy\"></span></button>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">发动机号：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input type=\"text\" ng-model=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.engineNo\" class=\"form-control\" ng-readonly=\"!vehicleInfoForm.inEdit\">\n" +
    "                    <span class=\"input-group-btn\"><button clipboard on-copied=\"orderDetail.notifyCopied()\" text=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.engineNo\" class=\"btn btn-primary\"><span class=\"glyphicon glyphicon-copy\"></span></button>\n" +
    "                    </span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">登记日期：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"text\" class=\"form-control\" uib-datepicker-popup ng-model=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.firstRegisterDate\" is-open=\"orderDetail.datePickerOpened.registerDate\" ng-required=\"true\" datepicker-options=\"orderDetail.datepickerOptions\" clear-text=\"清空\" current-text=\"今天\" close-text=\"关闭\" ng-readonly=\"!vehicleInfoForm.inEdit\" ng-click=\"orderDetail.openDatePicker('registerDate')\" />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "                <div class=\"hint\">点击图片进行放大和缩小</div>\n" +
    "                <img ng-src=\"{{orderDetail.carInsurePolicy.detailObject.vehicleInfo.licenseImage}}\" alt=\"行驶证照片\">\n" +
    "                <img ng-src=\"{{orderDetail.carInsurePolicy.detailObject.vehicleInfo.licenseImageBack}}\" alt=\"行驶证副页照片\">\n" +
    "                <div class=\"checkbox\">\n" +
    "                    <label>\n" +
    "                        <input type=\"checkbox\" ng-model=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.transferFlag\" ng-disabled=\"!vehicleInfoForm.inEdit\">过户车辆</label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" ng-if=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.transferFlag\">\n" +
    "            <label class=\"control-label col-sm-2\">过户日期：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"text\" class=\"form-control\" uib-datepicker-popup ng-model=\"orderDetail.carInsurePolicy.detailObject.vehicleInfo.transferDate\" is-open=\"orderDetail.datePickerOpened.transferDate\" ng-required=\"true\" datepicker-options=\"orderDetail.datepickerOptions\" clear-text=\"清空\" current-text=\"今天\" close-text=\"关闭\" ng-readonly=\"!vehicleInfoForm.inEdit\" ng-click=\"orderDetail.openDatePicker('transferDate')\" />\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <form class=\"form-horizontal\" novalidate name=\"insurePeriodForm\">\n" +
    "        <h4>保险期限：\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-hide=\"insurePeriodForm.inEdit\" ng-click=\"insurePeriodForm.inEdit = true\">编辑</button>\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-show=\"insurePeriodForm.inEdit\" ng-click=\"orderDetail.saveChanges(insurePeriodForm)\">保存</button>\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-show=\"insurePeriodForm.inEdit\" ng-click=\"orderDetail.cancelChanges(insurePeriodForm)\">取消</button>\n" +
    "        </h4>\n" +
    "        <div class=\"form-group\" ng-if=\"orderDetail.carInsurePolicy.detailObject.compulsory\">\n" +
    "            <label class=\"control-label col-sm-2\">交强险期限：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <div class=\"form-text-inline\">\n" +
    "                    <input type=\"text\" class=\"form-control\" uib-datepicker-popup ng-model=\"orderDetail.carInsurePolicy.detailObject.compulsory.validStartDatetime\" is-open=\"orderDetail.datePickerOpened.compulsoryStart\" ng-required=\"true\" datepicker-options=\"orderDetail.datepickerOptions\" clear-text=\"清空\" current-text=\"今天\" close-text=\"关闭\" ng-click=\"orderDetail.openDatePicker('compulsoryStart')\" ng-disabled=\"!insurePeriodForm.inEdit\" />\n" +
    "                </div>\n" +
    "                <div class=\"form-text-inline\">\n" +
    "                    <uib-timepicker ng-model=\"orderDetail.carInsurePolicy.detailObject.compulsory.validStartDatetime\" minute-step=\"orderDetail.timepickerOptions.mstep\" show-meridian=\"orderDetail.timepickerOptions.showMerdian\" show-spinners=\"orderDetail.timepickerOptions.showSpinners\" ng-disabled=\"!insurePeriodForm.inEdit\"></uib-timepicker>\n" +
    "                </div>\n" +
    "                <div class=\"form-text-inline\"> —— </div>\n" +
    "                <div class=\"form-text-inline\">\n" +
    "                    <input type=\"text\" class=\"form-control\" uib-datepicker-popup ng-model=\"orderDetail.carInsurePolicy.detailObject.compulsory.validEndDatetime\" is-open=\"orderDetail.datePickerOpened.compulsoryEnd\" ng-required=\"true\" datepicker-options=\"orderDetail.datepickerOptions\" clear-text=\"清空\" current-text=\"今天\" close-text=\"关闭\" ng-click=\"orderDetail.openDatePicker('compulsoryEnd')\" ng-disabled=\"!insurePeriodForm.inEdit\" />\n" +
    "                </div>\n" +
    "                <div class=\"form-text-inline\">\n" +
    "                    <uib-timepicker ng-model=\"orderDetail.carInsurePolicy.detailObject.compulsory.validEndDatetime\" minute-step=\"orderDetail.timepickerOptions.mstep\" show-meridian=\"orderDetail.timepickerOptions.showMerdian\" show-spinners=\"orderDetail.timepickerOptions.showSpinners\" ng-disabled=\"!insurePeriodForm.inEdit\"></uib-timepicker>\n" +
    "                </div>\n" +
    "                <div>{{orderDetail.carInsurePolicy.detailObject.compulsory.validEndDatetime | date:'yyyy-MM-dd hh:mm:ss' }}</div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" ng-if=\"orderDetail.carInsurePolicy.detailObject.commercial\">\n" +
    "            <label class=\"control-label col-sm-2\">商业险期限：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <div class=\"form-text-inline\">\n" +
    "                    <input type=\"text\" class=\"form-control\" uib-datepicker-popup ng-model=\"orderDetail.carInsurePolicy.detailObject.commercial.validStartDatetime\" is-open=\"orderDetail.datePickerOpened.commercialStart\" ng-required=\"true\" datepicker-options=\"orderDetail.datepickerOptions\" clear-text=\"清空\" current-text=\"今天\" close-text=\"关闭\" ng-click=\"orderDetail.openDatePicker('commercialStart')\" ng-disabled=\"!insurePeriodForm.inEdit\" />\n" +
    "                </div>\n" +
    "                <div class=\"form-text-inline\">\n" +
    "                    <uib-timepicker ng-model=\"orderDetail.carInsurePolicy.detailObject.commercial.validStartDatetime\" minute-step=\"orderDetail.timepickerOptions.mstep\" show-meridian=\"orderDetail.timepickerOptions.showMerdian\" show-spinners=\"orderDetail.timepickerOptions.showSpinners\" ng-disabled=\"!insurePeriodForm.inEdit\"></uib-timepicker>\n" +
    "                </div>\n" +
    "                <div class=\"form-text-inline\"> —— </div>\n" +
    "                <div class=\"form-text-inline\">\n" +
    "                    <input type=\"text\" class=\"form-control\" uib-datepicker-popup ng-model=\"orderDetail.carInsurePolicy.detailObject.commercial.validEndDatetime\" is-open=\"orderDetail.datePickerOpened.commercialEnd\" ng-required=\"true\" datepicker-options=\"orderDetail.datepickerOptions\" clear-text=\"清空\" current-text=\"今天\" close-text=\"关闭\" ng-click=\"orderDetail.openDatePicker('commercialEnd')\" ng-disabled=\"!insurePeriodForm.inEdit\" />\n" +
    "                </div>\n" +
    "                <div class=\"form-text-inline\">\n" +
    "                    <uib-timepicker ng-model=\"orderDetail.carInsurePolicy.detailObject.commercial.validEndDatetime\" minute-step=\"orderDetail.timepickerOptions.mstep\" show-meridian=\"orderDetail.timepickerOptions.showMerdian\" show-spinners=\"orderDetail.timepickerOptions.showSpinners\" ng-disabled=\"!insurePeriodForm.inEdit\"></uib-timepicker>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <form class=\"form-horizontal\" novalidate name=\"insurePolicyForm\">\n" +
    "        <h4>保费计算：\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-hide=\"insurePolicyForm.inEdit\" ng-click=\"insurePolicyForm.inEdit = true\">编辑</button>\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-show=\"insurePolicyForm.inEdit\" ng-click=\"orderDetail.saveChanges(insurePolicyForm)\">保存</button>\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-show=\"insurePolicyForm.inEdit\" ng-click=\"orderDetail.cancelChanges(insurePolicyForm)\">取消</button>\n" +
    "        </h4>\n" +
    "        <div ng-if=\"orderDetail.carInsurePolicy.detailObject.compulsory\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label col-sm-2\">交强险</label>\n" +
    "                <div class=\"col-sm-offset-4 col-sm-6\">\n" +
    "                    <input type=\"number\" ng-model=\"orderDetail.carInsurePolicy.detailObject.compulsory.insurePremium\" class=\"form-control\" ng-readonly=\"!insurePolicyForm.inEdit\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label class=\"control-label col-sm-2\">车船税</label>\n" +
    "                <div class=\"col-sm-offset-4 col-sm-6\">\n" +
    "                    <input type=\"number\" ng-model=\"orderDetail.carInsurePolicy.detailObject.compulsory.travelTax\" class=\"form-control\" ng-readonly=\"!insurePolicyForm.inEdit\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"text-right text-primary\">合计：{{orderDetail.carInsurePolicy.detailObject.compulsory | compulsorySum | rmb}}元</div>\n" +
    "        </div>\n" +
    "        <div ng-if=\"orderDetail.carInsurePolicy.detailObject.commercial\">\n" +
    "            <div class=\"form-group\" ng-repeat=\"insureItem in orderDetail.carInsurePolicy.detailObject.commercial.insureList\">\n" +
    "                <label class=\"control-label col-sm-2\">{{insureItem.insureName}}</label>\n" +
    "                <div class=\"form-text col-sm-4\">{{insureItem.insureAmount}}</div>\n" +
    "                <div class=\"col-sm-6\">\n" +
    "                    <input type=\"number\" ng-model=\"insureItem.insurePremium\" class=\"form-control\" ng-readonly=\"!insurePolicyForm.inEdit\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-if=\"insureListContainsExt.length\">\n" +
    "                <label class=\"control-label col-sm-2\">附加不计免赔</label>\n" +
    "            </div>\n" +
    "            <div class=\"form-group\" ng-repeat=\"insureItem in orderDetail.carInsurePolicy.detailObject.commercial.insureList | insureArrContainsExt as insureListContainsExt\">\n" +
    "                <label class=\"control-label col-sm-3\">{{insureItem.insureName}}不计免赔</label>\n" +
    "                <div class=\"col-sm-offset-3 col-sm-6\">\n" +
    "                    <input type=\"number\" ng-model=\"insureItem.insurePremiumExt\" ng-patt class=\"form-control\" ng-readonly=\"!insurePolicyForm.inEdit\">\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"text-right text-primary\">合计：{{orderDetail.carInsurePolicy.detailObject.commercial | commercialSum | rmb}}元</div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group text-primary\">\n" +
    "            <div class=\"col-sm-3\">总保费（强制保险+商业保险）</div>\n" +
    "            <div class=\"col-sm-offset-3 col-sm-6 text-right\">总计：{{orderDetail.carInsurePolicy.detailObject | insurePremiumGrandTotal | rmb}}元</div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <form class=\"form-horizontal\" novalidate name=\"distributionInfoForm\">\n" +
    "        <h4>收件人信息：\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-hide=\"distributionInfoForm.inEdit\" ng-click=\"distributionInfoForm.inEdit = true\">编辑</button>\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-show=\"distributionInfoForm.inEdit\" ng-click=\"orderDetail.saveChanges(distributionInfoForm)\">保存</button>\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-show=\"distributionInfoForm.inEdit\" ng-click=\"orderDetail.cancelChanges(distributionInfoForm)\">取消</button>\n" +
    "        </h4>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">姓名：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"text\" ng-model=\"orderDetail.carInsurePolicy.detailObject.distributionInfo.receiverName\" class=\"form-control\" ng-readonly=\"!distributionInfoForm.inEdit\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">手机号码：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"tel\" ng-model=\"orderDetail.carInsurePolicy.detailObject.distributionInfo.receiverMoblie\" class=\"form-control\" ng-readonly=\"!distributionInfoForm.inEdit\" mobile>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">收件地区：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <city-select ng-model=\"orderDetail.carInsurePolicy.detailObject.distributionInfo.reveiverArea\" ng-readonly=\"!distributionInfoForm.inEdit\"></city-select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">详细地址：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"text\" ng-model=\"orderDetail.carInsurePolicy.detailObject.distributionInfo.receiverAddress\" class=\"form-control\" ng-readonly=\"!distributionInfoForm.inEdit\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">电子邮箱：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"email\" ng-model=\"orderDetail.carInsurePolicy.detailObject.distributionInfo.receiverEmail\" class=\"form-control\" ng-readonly=\"!distributionInfoForm.inEdit\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <form class=\"form-horizontal\" novalidate name=\"writerForm\">\n" +
    "        <h4>出单信息：\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-hide=\"writerForm.inEdit\" ng-click=\"writerForm.inEdit = true\">编辑</button>\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-show=\"writerForm.inEdit\" ng-click=\"orderDetail.saveChanges(writerForm)\">保存</button>\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-show=\"writerForm.inEdit\" ng-click=\"orderDetail.cancelChanges(writerForm)\">取消</button>\n" +
    "        </h4>\n" +
    "        <div class=\"form-group\" ng-if=\"['1', '3'].indexOf(orderDetail.carInsurePolicy.detailObject.insuranceType) !== -1\">\n" +
    "            <label class=\"control-label col-sm-2\">交强险保单号：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"text\" ng-model=\"orderDetail.carInsurePolicy.detailObject.compulsory.compulsoryInsuranceNo\" class=\"form-control\" ng-readonly=\"!writerForm.inEdit\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\" ng-if=\"['2', '3'].indexOf(orderDetail.carInsurePolicy.detailObject.insuranceType) !== -1\">\n" +
    "            <label class=\"control-label col-sm-2\">商业险保单号：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"text\" ng-model=\"orderDetail.carInsurePolicy.detailObject.commercial.cmmercialInsuranceNo\" class=\"form-control\" ng-readonly=\"!writerForm.inEdit\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <form class=\"form-horizontal\" novalidate name=\"deliveryInfoForm\">\n" +
    "        <h4>快递信息：\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-hide=\"deliveryInfoForm.inEdit\" ng-click=\"deliveryInfoForm.inEdit = true\">编辑</button>\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-show=\"deliveryInfoForm.inEdit\" ng-click=\"orderDetail.saveChanges(deliveryInfoForm)\">保存</button>\n" +
    "        <button class=\"btn btn-sm btn-link\" ng-show=\"deliveryInfoForm.inEdit\" ng-click=\"orderDetail.cancelChanges(deliveryInfoForm)\">取消</button>\n" +
    "        </h4>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">快递公司：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <select ng-model=\"orderDetail.carInsurePolicy.detailObject.distributionInfo.company\" class=\"form-control\" ng-options=\"vendor for vendor in orderDetail.DeliveryVendorsEnum\" required=\"true\" ng-disabled=\"!deliveryInfoForm.inEdit\"></select>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label class=\"control-label col-sm-2\">快递单号：</label>\n" +
    "            <div class=\"col-sm-10\">\n" +
    "                <input type=\"text\" ng-model=\"orderDetail.carInsurePolicy.detailObject.distributionInfo.serialNo\" class=\"form-control\" ng-readonly=\"!deliveryInfoForm.inEdit\" required=\"true\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ng-if=\"orderDetail.contentType === 'operate'\">\n" +
    "    <ul class=\"log-list\">\n" +
    "        <li class=\"list-item\" ng-repeat=\"operateLog in orderDetail.operateLogList\">\n" +
    "            <div class=\"row\">\n" +
    "                <span class=\"col-sm-4\">账户：{{operateLog.userName}}</span>\n" +
    "                <span class=\"col-sm-4 text-center\">操作：{{operateLog.operate}}</span>\n" +
    "                <span class=\"col-sm-4 text-right\">时间：{{operateLog.createDatetime | date: 'yyyy-MM-dd HH:mm:ss'}}</span>\n" +
    "            </div>\n" +
    "            <div class=\"row\">\n" +
    "                <span class=\"col-sm-2\">备注/原因：</span>\n" +
    "                <span class=\"col-sm-10\">\n" +
    "                    <p ng-repeat=\"remark in operateLog.remarks | adaptiveRemarks\">{{remark}}</p>\n" +
    "                </span>\n" +
    "            </div>\n" +
    "        </li>\n" +
    "    </ul>\n" +
    "</div>\n" +
    "<div class=\"modal-body\" ng-if=\"orderDetail.contentType === 'remark'\">\n" +
    "    <ng-include src=\"'src/app/orders/order-remark-list.tpl.html'\" onload=\"theRemarkListContainer = orderDetail\"></ng-include>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-info\" type=\"button\" ng-click=\"$dismiss()\">取消</button>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/orders/order-fail-price-modal.tpl.html",
    "<div class=\"modal-header\">\n" +
    "    <h3 class=\"modal-title\">报价失败</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "    <form novalidate name=\"formFailPrice\">\n" +
    "        <div class=\"checkbox\" ng-repeat=\"reason in orderFailPrice.orderFailPriceReasonsEnum\">\n" +
    "            <label>\n" +
    "                <input type=\"checkbox\" checklist-model=\"orderFailPrice.remarks\" checklist-value=\"reason\"> {{reason}}\n" +
    "        </div>\n" +
    "        <textarea class=\"form-control\" ng-if=\"orderFailPrice.remarks.indexOf('其他') !== -1\" ng-model=\"orderFailPrice.otherDetail\" rows=\"5\" required=\"true\"></textarea>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"orderFailPrice.confirm(formFailPrice)\">确定</button>\n" +
    "    <button class=\"btn btn-info\" type=\"button\" ng-click=\"$dismiss()\">取消</button>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/orders/order-followup-modal.tpl.html",
    "<div class=\"modal-header\">\n" +
    "    <h3 class=\"modal-title\">修改跟进状态</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "    <form novalidate name=\"formFollowup\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label>跟进状态：</label>\n" +
    "            <div class=\"btn-group text-cent\">\n" +
    "                <button class=\"btn btn-success\" ng-model=\"orderFollowup.followUpStatus\" uib-btn-radio=\"val*1\" ng-repeat=\"(val, desc) in orderFollowup.orderFollowUpStatusEnum\">{{desc}}</button>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "            <label>备注（可选）：</label>\n" +
    "            <textarea class=\"form-control\" ng-model=\"orderFollowup.remarks\" rows=\"5\"></textarea>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"orderFollowup.confirm(formFollowup)\">确定</button>\n" +
    "    <button class=\"btn btn-info\" type=\"button\" ng-click=\"$dismiss()\">取消</button>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/orders/order-refund-modal.tpl.html",
    "<div class=\"modal-header\">\n" +
    "    <h3 class=\"modal-title\">确认退款</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"orderRefund.confirm()\">确定</button>\n" +
    "    <button class=\"btn btn-info\" type=\"button\" ng-click=\"$dismiss()\">取消</button>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/orders/order-reject-underwrite-modal.tpl.html",
    "<div class=\"modal-header\">\n" +
    "    <h3 class=\"modal-title\">核保不通过</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "    <form novalidate name=\"formRejectUnderwrite\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <label>核保不通过原因：</label>\n" +
    "            <textarea class=\"form-control\" ng-model=\"orderRejectUnderwrite.remarks\" rows=\"5\" required=\"true\"></textarea>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"orderRejectUnderwrite.confirm(formRejectUnderwrite)\">确定</button>\n" +
    "    <button class=\"btn btn-info\" type=\"button\" ng-click=\"$dismiss()\">取消</button>\n" +
    "</div>");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/orders/order-remark-list.tpl.html",
    "<ul class=\"log-list\">\n" +
    "    <li class=\"list-item\" ng-repeat=\"remark in theRemarkListContainer.remarkList\">\n" +
    "        <div class=\"row\">\n" +
    "            <span class=\"col-sm-4\">账户：{{remark.userName}}</span>\n" +
    "            <span class=\"col-sm-4 text-center\">操作：添加备注</span>\n" +
    "            <span class=\"col-sm-4 text-right\">时间：{{remark.createDatetime | date: 'yyyy-MM-dd HH:mm:ss'}}</span>\n" +
    "        </div>\n" +
    "        <p ng-text-truncate=\"remark.content\" ng-tt-chars-threshold=\"170\" ng-tt-more-label=\" 更多...\" ng-tt-less-label=\" 收起\"></p>\n" +
    "        <!-- <div>备注：{{remark.content}}</div> -->\n" +
    "    </li>\n" +
    "</ul>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/orders/order-remark-modal.tpl.html",
    "<div class=\"modal-header\">\n" +
    "    <h3 class=\"modal-title\">备注</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "    <ng-include src=\"'src/app/orders/order-remark-list.tpl.html'\" onload=\"theRemarkListContainer = orderRemark\"></ng-include>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "    <form novalidate name=\"formRemark\">\n" +
    "        <div class=\"form-group\">\n" +
    "            <textarea class=\"form-control remark-input\" ng-model=\"orderRemark.remarks\" rows=\"5\" required=\"true\"></textarea>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "    <button class=\"btn btn-primary\" type=\"button\" ng-click=\"orderRemark.confirm(formRemark)\">添加备注</button>\n" +
    "    <button class=\"btn btn-info\" type=\"button\" ng-click=\"$dismiss()\">取消</button>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/orders/orders.tpl.html",
    "<div class=\"content-section\">\n" +
    "    <header class=\"content-section-header\">多条件搜索</header>\n" +
    "    <form class=\"form-inline\" novalidate name=\"searchForm\">\n" +
    "        <div class=\"form-line\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"order-sn\">订单号：</label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"order-sn\" ng-model=\"orders.searchParam.policySn\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"order-plate\">车牌号：</label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"order-plate\" ng-model=\"orders.searchParam.carNumber\">\n" +
    "            </div>\n" +
    "            <div class=\"form-group\">\n" +
    "                <label for=\"order-sn\">保险师手机号：</label>\n" +
    "                <input type=\"text\" class=\"form-control\" id=\"order-sn\" ng-model=\"orders.searchParam.mobile\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"form-line\">\n" +
    "            <div class=\"form-group\">\n" +
    "                <label>时间段：</label>\n" +
    "                <div class=\"input-group\">\n" +
    "                    <input type=\"text\" class=\"form-control\" uib-datepicker-popup ng-model=\"orders.searchParam.sTime\" is-open=\"orders.datePickerOpened.sTime\" ng-datepicker-options=\"orders.datepickerOptions\" clear-text=\"清空\" current-text=\"今天\" close-text=\"关闭\" ng-click=\"orders.datePickerOpened.sTime = true\" />\n" +
    "                    <span class=\"input-group-addon\" id=\"basic-addon1\">0点</span>\n" +
    "                </div>\n" +
    "                <label> —— </label>\n" +
    "                <div class=\"input-group\">\n" +
    "                <input type=\"text\" class=\"form-control\" uib-datepicker-popup ng-model=\"orders.searchParam.eTime\" is-open=\"orders.datePickerOpened.eTime\" ng-datepicker-options=\"orders.datepickerOptions\" clear-text=\"清空\" current-text=\"今天\" close-text=\"关闭\" ng-click=\"orders.datePickerOpened.eTime = true\" />\n" +
    "                    <span class=\"input-group-addon\" id=\"basic-addon1\">24点</span>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <button class=\"btn btn-primary\" ng-click=\"orders.search(searchForm)\">\n" +
    "                <span class=\"glyphicon glyphicon-search\"></span>\n" +
    "            </button>\n" +
    "            <div class=\"form-group pull-right lead\">\n" +
    "                <label for=\"order-sn\">订单数量：</label>\n" +
    "                <p class=\"form-control-static text-primary\" ng-bind=\"orders.paginationOptions.count\"></p>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </form>\n" +
    "</div>\n" +
    "<div class=\"table-responsive content-section\">\n" +
    "    <table class=\"table table-striped table-orders\">\n" +
    "        <thead>\n" +
    "            <tr>\n" +
    "                <th>序号</th>\n" +
    "                <!-- (#index) -->\n" +
    "                <th>订单号</th>\n" +
    "                <!-- (policySn) -->\n" +
    "                <th class=\"date-column\" ng-if=\"[-200].indexOf(orders.searchParam.policyStatus) !== -1\">生成时间</th>\n" +
    "                <!-- (createDate) -->\n" +
    "                <th class=\"date-column\" ng-if=\"[0,10].indexOf(orders.searchParam.policyStatus) !== -1\">提交订单时间</th>\n" +
    "                <!-- (subOrderTime) -->\n" +
    "                <th class=\"date-column\" ng-if=\"[20,50,55].indexOf(orders.searchParam.policyStatus) !== -1\">报价时间</th>\n" +
    "                <!-- (quotesTime) -->\n" +
    "                <th ng-if=\"[55].indexOf(orders.searchParam.policyStatus) !== -1\">付款剩余时间</th>\n" +
    "                <!-- (effectTime - now) -->\n" +
    "                <th ng-if=\"[100].indexOf(orders.searchParam.policyStatus) !== -1\">支付时间</th>\n" +
    "                <!-- (payTime) -->\n" +
    "                <th ng-if=\"[180,300].indexOf(orders.searchParam.policyStatus) !== -1\">核保时间</th>\n" +
    "                <!-- (underwriteTime) -->\n" +
    "                <th ng-if=\"[200].indexOf(orders.searchParam.policyStatus) !== -1\">出单时间</th>\n" +
    "                <!-- (writerTime) -->\n" +
    "                <th ng-if=\"[600].indexOf(orders.searchParam.policyStatus) !== -1\">关闭时间</th>\n" +
    "                <!-- (offTime) -->\n" +
    "                <th ng-if=\"[500].indexOf(orders.searchParam.policyStatus) !== -1\">执行退款时间</th>\n" +
    "                <!-- (refundTime) -->\n" +
    "                <th ng-if=\"[0].indexOf(orders.searchParam.policyStatus) !== -1\">订单状态</th>\n" +
    "                <!-- (policyStatus|) -->\n" +
    "                <th>车牌号</th>\n" +
    "                <!-- (carNumber) -->\n" +
    "                <th>保险公司</th>\n" +
    "                <!-- (company) -->\n" +
    "                <th>保险师</th>\n" +
    "                <!-- (nickName) -->\n" +
    "                <th>手机</th>\n" +
    "                <!-- (mobile) -->\n" +
    "                <th ng-if=\"[0,20,50,55,100,180,200,300,500,600].indexOf(orders.searchParam.policyStatus) !== -1\">报价人</th>\n" +
    "                <!-- (quotesUser) -->\n" +
    "                <th ng-if=\"[0,180,200,300,500].indexOf(orders.searchParam.policyStatus) !== -1\">核保人</th>\n" +
    "                <!-- (underwriteUser) -->\n" +
    "                <th ng-if=\"[0,200].indexOf(orders.searchParam.policyStatus) !== -1\">出单人</th>\n" +
    "                <!-- (writerUser) -->\n" +
    "                <th ng-if=\"[600].indexOf(orders.searchParam.policyStatus) !== -1\">关闭类型</th>\n" +
    "                <!-- (offUser |) -->\n" +
    "                <th ng-if=\"[600].indexOf(orders.searchParam.policyStatus) !== -1\">关闭人</th>\n" +
    "                <!-- (offUser) -->\n" +
    "                <th ng-if=\"[500].indexOf(orders.searchParam.policyStatus) !== -1\">退款人</th>\n" +
    "                <!-- (refundUser) -->\n" +
    "                <th>订单详情</th>\n" +
    "                <!-- (policyUuid>) -->\n" +
    "                <th ng-if=\"[55, -200].indexOf(orders.searchParam.policyStatus) !== -1\">跟进状态</th>\n" +
    "                <!-- (followUpStatus) -->\n" +
    "                <th ng-if=\"[55, -200].indexOf(orders.searchParam.policyStatus) !== -1\">跟进人</th>\n" +
    "                <!-- (followUpUser) -->\n" +
    "                <th ng-if=\"[55, -200].indexOf(orders.searchParam.policyStatus) !== -1\">跟进时间</th>\n" +
    "                <!-- (followUpTime) -->\n" +
    "                <th ng-if=\"[10,20,50,55,100,180,200,300,500,600, -200].indexOf(orders.searchParam.policyStatus) !== -1\">操作</th>\n" +
    "            </tr>\n" +
    "        </thead>\n" +
    "        <tbody>\n" +
    "            <tr current-page=\"orders.paginationOptions.currentPage\" total-items=\"orders.paginationOptions.count\" dir-paginate=\"order in orders.searchResult | itemsPerPage:orders.paginationOptions.pageSize\">\n" +
    "                <td>{{ ($index + 1) + (orders.paginationOptions.currentPage - 1) * orders.paginationOptions.pageSize}}</td>\n" +
    "                <td class=\"text-nowrap\">{{order.policySn}}</td>\n" +
    "                <td ng-if=\"[-200].indexOf(orders.searchParam.policyStatus) !== -1\" class=\"date-column\">{{order.createDate | date: 'yyyy-MM-dd HH:mm:ss'}}</td>\n" +
    "                <td class=\"date-column\" ng-if=\"[0,10].indexOf(orders.searchParam.policyStatus) !== -1\">{{order.subOrderTime | date: 'yyyy-MM-dd HH:mm:ss'}}</td>\n" +
    "                <td class=\"date-column\" ng-if=\"[20,50,55].indexOf(orders.searchParam.policyStatus) !== -1\">{{order.quotesTime | date: 'yyyy-MM-dd HH:mm:ss'}}</td>\n" +
    "                <td class=\"text-nowrap\" ng-if=\"[55].indexOf(orders.searchParam.policyStatus) !== -1\">\n" +
    "                    <span ng-if=\"order.effectTime\" countdown end-date=\"{{order.effectTime}}\" units=\"days|hours|minutes\" lang=\"CN\"></span>\n" +
    "                    <span ng-if=\"!order.effectTime\">无信息</span>\n" +
    "                    <span></span>\n" +
    "                </td>\n" +
    "                <td class=\"date-column\" ng-if=\"[100].indexOf(orders.searchParam.policyStatus) !== -1\">{{order.payTime | date: 'yyyy-MM-dd HH:mm:ss'}}</td>\n" +
    "                <td class=\"date-column\" ng-if=\"[180,300].indexOf(orders.searchParam.policyStatus) !== -1\">{{order.underwriteTime | date: 'yyyy-MM-dd HH:mm:ss'}}</td>\n" +
    "                <td class=\"date-column\" ng-if=\"[200].indexOf(orders.searchParam.policyStatus) !== -1\">{{order.writerTime | date: 'yyyy-MM-dd HH:mm:ss'}}</td>\n" +
    "                <td class=\"date-column\" ng-if=\"[600].indexOf(orders.searchParam.policyStatus) !== -1\">{{order.offTime | date: 'yyyy-MM-dd HH:mm:ss'}}</td>\n" +
    "                <td class=\"date-column\" ng-if=\"[500].indexOf(orders.searchParam.policyStatus) !== -1\">{{order.refundTime | date: 'yyyy-MM-dd HH:mm:ss'}}</td>\n" +
    "                <td ng-if=\"[0].indexOf(orders.searchParam.policyStatus) !== -1\" class=\"text-nowrap\">{{order.policyStatus | orderStatus}}</td>\n" +
    "                <td class=\"text-nowrap\">{{order.carNumber || '未上牌'}}</td>\n" +
    "                <td>{{order.company}}</td>\n" +
    "                <td class=\"text-nowrap\">{{order.nickName}}</td>\n" +
    "                <td class=\"text-nowrap\">{{order.mobile}}</td>\n" +
    "                <td ng-if=\"[0,20,50,55,100,180,200,300,500,600].indexOf(orders.searchParam.policyStatus) !== -1\">{{order.quotesUser}}</td>\n" +
    "                <td ng-if=\"[0,180,200,300,500].indexOf(orders.searchParam.policyStatus) !== -1\">{{order.underwriteUser}}</td>\n" +
    "                <td ng-if=\"[0,200].indexOf(orders.searchParam.policyStatus) !== -1\">{{order.writerUser || order.policyStatus == 200 && '系统' || ''}}</td>\n" +
    "                <td ng-if=\"[600].indexOf(orders.searchParam.policyStatus) !== -1\">{{order.offUser ? '人工关闭' : '系统关闭'}}</td>\n" +
    "                <td ng-if=\"[600].indexOf(orders.searchParam.policyStatus) !== -1\">{{order.offUser}}</td>\n" +
    "                <td ng-if=\"[500].indexOf(orders.searchParam.policyStatus) !== -1\">{{order.refundUser}}</td>\n" +
    "                <td>\n" +
    "                    <button class=\"btn btn-link\" ng-click=\"orders.showDetail(order)\">查看</button>\n" +
    "                </td>\n" +
    "                <td ng-if=\"[55, -200].indexOf(orders.searchParam.policyStatus) !== -1\">\n" +
    "                    <button class=\"btn btn-link\" ng-click=\"orders.followup(order)\">{{order.followUpStatus | orderFollowupStatus}}</button>\n" +
    "                </td>\n" +
    "                <td ng-if=\"[55, -200].indexOf(orders.searchParam.policyStatus) !== -1\">{{order.followUpUser}}</td>\n" +
    "                <td class=\"date-column\" ng-if=\"[55, -200].indexOf(orders.searchParam.policyStatus) !== -1\">{{order.followUpTime | date: 'yyyy-MM-dd HH:mm:ss'}}</td>\n" +
    "                <td class=\"text-nowrap\" ng-if=\"[10,20,50,55,100,180,200,300,500,600, -200].indexOf(orders.searchParam.policyStatus) !== -1\">\n" +
    "                    <button class=\"btn btn-link\" ng-click=\"orders.confirmPrice(order)\" ng-if=\"[10].indexOf(orders.searchParam.policyStatus) !== -1\">确定报价</button>\n" +
    "                    <button class=\"btn btn-link\" ng-click=\"orders.failPrice(order)\" ng-if=\"[10].indexOf(orders.searchParam.policyStatus) !== -1\">报价失败</button>\n" +
    "                    <button class=\"btn btn-link\" ng-click=\"orders.confirmUnderwrite(order)\" ng-if=\"[100].indexOf(orders.searchParam.policyStatus) !== -1\">核保通过</button>\n" +
    "                    <button class=\"btn btn-link\" ng-click=\"orders.rejectUnderwrite(order)\" ng-if=\"[100].indexOf(orders.searchParam.policyStatus) !== -1\">核保不通过</button>\n" +
    "                    <button class=\"btn btn-link\" ng-click=\"orders.confirmIssue(order)\" ng-if=\"[180].indexOf(orders.searchParam.policyStatus) !== -1\">已出单</button>\n" +
    "\n" +
    "                    <button class=\"btn btn-link\" ng-click=\"orders.refund(order)\" ng-if=\"[300].indexOf(orders.searchParam.policyStatus) !== -1\">退款</button>\n" +
    "                    <button class=\"btn btn-link\" ng-click=\"orders.closeOrder(order)\" ng-if=\"[300].indexOf(orders.searchParam.policyStatus) !== -1\">关闭订单</button>\n" +
    "                    <button class=\"btn btn-link\" ng-click=\"orders.remark(order)\">备注</button>\n" +
    "                </td>\n" +
    "            </tr>\n" +
    "        </tbody>\n" +
    "    </table>\n" +
    "</div>\n" +
    "<div>\n" +
    "    <dir-pagination-controls max-size=\"5\" direction-links=\"true\" boundary-links=\"false\" on-page-change=\"orders.search()\" class=\"pull-right\"></dir-pagination-controls>\n" +
    "</div>\n" +
    "");
}]);
})();

(function(module) {
try { module = angular.module("templates"); }
catch(err) { module = angular.module("templates", []); }
module.run(["$templateCache", function($templateCache) {
  "use strict";
  $templateCache.put("src/app/welcome/welcome.tpl.html",
    "<!-- 检查登录状态中 -->\n" +
    "<div class=\"well welcome-msg\">\n" +
    "    <h4>欢迎来到微易车险管理系统！</h4>\n" +
    "    <p ng-if=\"welcome.userInfo.authed === 'UNKNOWN'\">检查登录状态中...</p>\n" +
    "</div>\n" +
    "<!-- 未登录 -->\n" +
    "<form novalidate class=\"form-horizontal login-form center-block\" name=\"loginForm\" ng-if=\"welcome.userInfo.authed === 'FAIL'\">\n" +
    "    <div class=\"form-group\">\n" +
    "        <label class=\"control-label col-sm-2\" for=\"userName\">用户名：</label>\n" +
    "        <div class=\"col-sm-10\">\n" +
    "            <input type=\"text\" class=\"form-control\" id=\"userName\" ng-model=\"welcome.loginParam.userName\" required>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <label class=\"control-label col-sm-2\" for=\"pwd\">密码：</label>\n" +
    "        <div class=\"col-sm-10\">\n" +
    "            <input type=\"password\" class=\"form-control\" id=\"pwd\" ng-model=\"welcome.loginParam.password\" required>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"form-group\">\n" +
    "        <div class=\"col-sm-offset-2 col-sm-10\">\n" +
    "            <button class=\"btn btn-default\" ng-click=\"welcome.doLogin(loginForm)\">登录</button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</form>\n" +
    "");
}]);
})();
