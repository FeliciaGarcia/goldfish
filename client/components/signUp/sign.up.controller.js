UserSignUpController.$inject=['UserService', '$state'];

function UserSignUpController(UserService, $state){
	const vm = this;

	vm.newUser = {};
	vm.createNewUser = CreateNewUser;
	vm.created = true;

	activate();
	function activate() {}

	function CreateNewUser(newUser){
		UserService
			.createNewUser(vm.newUser)
			.then(function toLogin(response){
				if(response.data.success){
				$state.go('login');
				}
				else {
					vm.created = false;
					$state.go('signUp');
				}
		});
	}
}

module.exports = UserSignUpController;