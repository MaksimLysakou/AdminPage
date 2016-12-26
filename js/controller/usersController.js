angular
	.module('adminPage')
	.controller('usersController', function($location) {
		this.users = usersService.getUsers("", 0, 15); // (request string, start = 0, count = 15) TODO
		
		window.onscroll = function() {
		  	if(window.scrollY == window.scrollMaxY && this.elementsLimit < this.users.length) {
		  		// TODO: http get request; (+5)
		  	}
		}

		this.editUser = function(user) {
			$location.url("users/" + user.username);
		}
	});