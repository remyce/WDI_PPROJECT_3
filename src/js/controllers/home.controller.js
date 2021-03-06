angular
  .module('clubMate')
  .controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['CurrentUserService', '$state'];
function HomeCtrl(CurrentUserService, $state) {
  if (CurrentUserService.currentUser) {
    return $state.go('eventsIndex');
  }

  const vm = this;

  vm.login    = true;
  vm.register = false;

  vm.showLogin = () => {
    vm.login    = true;
    vm.register = false;
  };

  vm.showRegister = () => {
    vm.login    = false;
    vm.register = true;
  };
}
