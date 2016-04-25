(function() {
  'use strict';

  function headerCtrl(UserInfo) {
  	var vm = this;
  	vm.userInfo = UserInfo.get();
    vm.logout = function() {
      UserInfo.logout();
    };
  }

  angular.module('common.header', [])
    .controller('HeaderCtrl', headerCtrl);
})();
