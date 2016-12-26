angular
	.module('adminPage')
	.controller('groupsController', function($location) {
		this.groups = groupsService.getGroups("", 0, 15); // request string, start, count

		window.onscroll = function() {
		  	if(window.scrollY == window.scrollMaxY && this.elementsLimit < this.groups.length) {
		  		// TODO: new http get request; (+5)
		  	}
		}

		this.editGroup = function(group) {
			$location.url("groups/" + group.groupname);
		}

		this.editUser = function(user) {
			$location.url("users/" + user.username);
		}
	});