angular
	.module('adminPage')
	.controller('usersNavController', function() {
		this.tabs = [
			{ "label":"Главная", "href":"#" },
			{ "label":"Группы", "href":"#groups" },
			{ "label":"Пользователи", "href":"#users" }
		];
	});