angular
	.module('adminPage')
	.controller('userController', function($location, $stateParams) {
		this.user = usersService.getUser($stateParams.username);
		this.groups = groupsService.getGroupsByUser($stateParams.username);

		this.usernamePattern = "[A-Za-z\.0-9\-]{4,20}";
		this.firstNamePattern = "[А-Яа-яA-Za-z\ \-]{2,20}";
		this.lastNamePattern = "[А-Яа-яA-Za-z]{2,20}";


		this.editGroup = function(group) {
			$location.url("groups/" + group.groupname);
		}

		this.saveUser = function (username, firstName, lastName, email) {
			usersService.saveUser(user["_id"], username, user.username, firstName, lastName, email);
		}
	});