angular
	.module('adminPage')
	.controller('groupController', function($location, $stateParams) {

		this.group = groupsService.getGroup($stateParams.groupname);
		this.users = usersService.getUsersByGroup($stateParams.groupname);
		this.groupnamePattern = "[A-Za-z\.0-9\-]{6,20}";

		this.editUser = function(user) {
			$location.url("users/" + user.username);
		}

		this.saveGroup = function (groupname, label) {
			groupsService.saveGroup(group["_id"], groupname, group.groupname, label, group.label);
			group = groupsService.getGroup($stateParams.groupname);
			users = usersService.getUsersByGroup($stateParams.groupname);
		}
	});