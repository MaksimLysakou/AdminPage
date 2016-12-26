angular
	.module('adminPage')
	.controller('groupsNavController', function() {
		this.tabs = [
			{ "label":"Группа", "href":"../" },
			{ "label":"Пользователи", "href":"#groups" }
		];
	});