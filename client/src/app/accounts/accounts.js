(function() {
  'use strict';

  function config($stateProvider) {
    $stateProvider
      .state('root.mgt.accounts', {
        url: '/accounts',
        views: {
          'workbench': {
            templateUrl: 'src/app/accounts/accounts.tpl.html',
            controller: 'AccountsCtrl as accounts'
          }
        }
      });
  }

  function accountsCtrl() {
    var vm = this;
  }

  angular.module('accounts', [])
    .config(config)
    .controller('AccountsCtrl', accountsCtrl);
})();
