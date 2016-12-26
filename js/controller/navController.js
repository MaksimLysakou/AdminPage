angular
	.module('adminPage')
	.controller('navController', function() {
		this.tabs = [
			{ "label":"Главная", "href":"#" },
			{ "label":"Группы", "href":"#groups" },
			{ "label":"Пользователи", "href":"#users" }
		];
	});