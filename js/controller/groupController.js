angular
	.module('adminPage')
	.controller('groupController', function($location, $stateParams) {
		this.group = groupsService.getGroup($stateParams.groupname);
		this.users = usersService.getUsersByGroup($stateParams.groupname);

		console.log(this.users);

		this.groupnamePattern = "[A-Za-z\.0-9\-]{6,20}";

		this.editUser = function(user) {
			$location.url("users/" + user.username);
		}
	});