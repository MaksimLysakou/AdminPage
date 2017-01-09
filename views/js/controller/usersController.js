angular
	.module('adminPage')
	.controller('usersController', function($location) {
		this.request = "";
		this.offset = 15;
		this.users = usersService.getUsers(this.request, 0, 15);

		window.onscroll = function() {
		  	if(window.scrollY == window.scrollMaxY && this.elementsLimit < this.users.length) {
		  		usersService.getUsers(request, offset, 5).forEach(function(element) {
		  			users.push(element);
		  		});

		  		offset += 5;
		  	}
		}
		this.editUser = function(user) {
			$location.url("users/" + user.username);
		}

		this.makeRequest = function(text) {
			request = text;
			offset = 15;
			this.users = usersService.getUsers(request, 0, 15);
		}
	});