angular
	.module('adminPage')
	.controller('groupController', function($routeParams) {
		this.groupname = $routeParams.groupname;
	});