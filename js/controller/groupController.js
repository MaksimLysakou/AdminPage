angular
	.module('adminPage')
	.controller('groupController', function($stateParams) {
		this.group = groupsService.getGroup($stateParams.groupname);
	});