angular
	.module('adminPage')
	.controller('userController', function($routeParams) {
		this.username = $routeParams.username;
	});