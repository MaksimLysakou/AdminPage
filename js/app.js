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

	app.controller('usersController', function($scope) {
		$scope.users = [
			{ 
				"username" : "First-user",
				"firstName" : "Максим",
				"lastName" : "Лысаков",
				"email" : "Lysakov_MS_14@mail.ru",
				"groups" : [ "group1", "group3", "group4"]
			},
			{ 
				"username" : "BeStUsEr",
				"firstName" : "Петька",
				"lastName" : "Васильев",
				"email" : "nagibator2006@tut.by",
				"groups" : []
			},
			{ 
				"username" : "Lorem.User",
				"firstName" : "Ipsim",
				"lastName" : "Dolor",
				"email" : "sit-amet@example.com",
				"groups" : [ "group1", "group2" ]
			}
		] // TODO: http get request;
	});

	app.controller('userController', function($routeParams) {
		this.username = $routeParams.username;
	});

	app.controller('groupsController', function($scope) {
		$scope.groups = [
			{ 
				"groupname" : "group1",
				"users" : [ "First-user", "Lorem.User" ]
			},
			{ 
				"groupname" : "group2",
				"users" : [ "Lorem.User" ]
			},
			{ 
				"groupname" : "group3",
				"users" : [ "First-user" ]
			},
			{ 
				"groupname" : "group4",
				"users" : [ "First-user" ]
			}
		] // TODO: http get request;
	});

	app.controller('groupController', function($routeParams) {
		this.groupname = $routeParams.groupname;
	});
})();