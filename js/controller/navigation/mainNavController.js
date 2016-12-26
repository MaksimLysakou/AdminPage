angular
	.module('adminPage')
	.controller('mainNavController', function() {
		this.tabs = [
			{ "label":"Главная", "href":"#" },
			{ "label":"Группы", "href":"#groups" },
			{ "label":"Пользователи", "href":"#users" }
		];
	});