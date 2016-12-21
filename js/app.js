(function(){
	var app = angular.module('adminPage', ['ngRoute']);

	app.config(function($routeProvider) {
		$routeProvider

			.when('/users', {
				templateUrl : 'pages/users.html',
				controller  : 'usersController'
			})

			.when('/groups', {
				templateUrl : 'pages/groups.html',
				controller  : 'groupsController'
			})
	});

	app.controller('mainController', function() {
		this.message = 'Awesome main page!';
	});

	app.controller('usersController', function() {
		this.message = 'Awesome users information!';
	});

	app.controller('groupsController', function() {
		this.message = 'Awesome groups information!';
	});
})();