(function(){
	var app = angular.module('adminPage', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider

			.when('/users', {
				templateUrl : 'pages/users.html',
				controller  : 'usersController'
			})

			.when('/users/:username', {
				templateUrl : 'pages/user.html',
				controller  : 'userController'
			})

			.when('/groups', {
				templateUrl : 'pages/groups.html',
				controller  : 'groupsController'
			})

			.when('/groups/:groupname', {
				templateUrl : 'pages/group.html',
				controller  : 'groupController'
			})
	});

	app.controller('mainController', function() {
		this.message = 'Awesome main page!';
	});

	app.controller('navController', function() {
		this.tabs = [
			{ "label":"Главная", "href":"#" },
			{ "label":"Группы", "href":"#groups" },
			{ "label":"Пользователи", "href":"#users" }
		];

		this.activeTab; // It should be = this.tabs[0]? But if we refresh page - first tab is selected as default. 

		this.setActiveTab = function(selectedTab){
			this.activeTab = selectedTab;
		};
	});

	app.controller('usersController', function($location) {
		this.users = [
			{ 
				"username" : "First-user",
				"firstName" : "Максим",
				"lastName" : "Лысаков",
				"email" : "Lysakov_MS_14@mail.ru",
				"groups" : [ 
					{ 
						"label" : "Лучшая группа",
						"groupname" : "group1"
					}, 
					{ 
						"label" : "Пользователи",
						"groupname" : "group3"
					}, 
					{ 
						"label" : "Администраторы",
						"groupname" : "group4"
					}
				]
			},
			{ 
				"username" : "BeStUsEr",
				"firstName" : "Петька",
				"lastName" : "Васильев",
				"email" : "username2006@tut.by",
				"groups" : []
			},
			{ 
				"username" : "Lorem.User",
				"firstName" : "Ipsum",
				"lastName" : "Dolor",
				"email" : "sit-amet@example.com",
				"groups" : [ 
					{
						"label" : "Лучшая группа",
						"groupname" : "group1"
					},
					{
						"label" : "Лучшая группа",
						"groupname" : "group2"
					}
				]
			}
		]; // TODO: http get request; (15)

		window.onscroll = function() {
		  	if(window.scrollY == window.scrollMaxY && this.elementsLimit < this.users.length){
		  		// TODO: http get request; (+5)
		  	}
		}

		this.editUser = function(user) {
			$location.url("users/" + user.username);
		}
	});

	app.controller('userController', function($routeParams) {
		this.username = $routeParams.username;
	});

	app.controller('groupsController', function($location) {
		this.groups = [
			{ 
				"label" : "Лучшая группа",
				"groupname" : "group1",
				"users" : [ "First-user", "Lorem.User" ]
			},
			{ 
				"label" : "Лучшая группа",
				"groupname" : "group2",
				"users" : [ "Lorem.User" ]
			},
			{ 
				"label" : "Пользователи",
				"groupname" : "group3",
				"users" : [ "First-user" ]
			},
			{ 
				"label" : "Администраторы",
				"groupname" : "group4",
				"users" : [ "First-user" ]
			}
		]; // TODO: http get request; (15)

		window.onscroll = function() {
		  	if(window.scrollY == window.scrollMaxY && this.elementsLimit < this.groups.length){
		  		// TODO: new http get request; (+5)
		  	}
		}

		this.editGroup = function(group) {
			$location.url("groups/" + group.groupname);
		}
	});

	app.controller('groupController', function($routeParams) {
		this.groupname = $routeParams.groupname;
	});
})();