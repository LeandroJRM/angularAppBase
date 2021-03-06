(function(){
  'use strict';

  angular
    .module('app')
    .controller('LoginController', LoginController);

  LoginController.$inject = ['$state'];

  function LoginController($state){
    var vm = this;

    vm.login = login;

    function login() {
      $state.go('app.dashboard');
    }
  }
})();
