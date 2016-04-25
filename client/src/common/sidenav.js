(function() {
    'use strict';

    function sidenavCtrl(UserInfo) {
        var vm = this;
        vm.userInfo = UserInfo.get();        
    }

    angular.module('common.sidenav', [])
        .controller('SidenavCtrl', sidenavCtrl);
})();
