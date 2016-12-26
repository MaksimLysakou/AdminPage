angular
	.module('adminPage')
	.controller('userController', function($stateParams) {
		this.user = usersService.getUser($stateParams.username);
	});