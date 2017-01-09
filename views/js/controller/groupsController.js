angular
	.module('adminPage')
	.controller('groupsController', function($location) {
		this.request = "";
		this.offset = 15;
		this.groups = groupsService.getGroups(this.request, 0, 15);

		window.onscroll = function() {
		  	if(window.scrollY == window.scrollMaxY && this.elementsLimit < this.groups.length) {
		  		groupsService.getGroups(request, offset, 5).forEach(function(element) {
		  			groups.push(element);
		  		});

		  		offset += 5;
		  	}
		}

		this.editGroup = function(group) {
			$location.url("groups/" + group.groupname);
		}

		this.makeRequest = function(text) {
			request = text;
			offset = 15;
			this.groups = groupsService.getGroups(request, 0, 15);
		}
	});