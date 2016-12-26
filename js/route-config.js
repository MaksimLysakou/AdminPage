angular
    .module('adminPage')
    .config(config);

function config($routeProvider) {
    $routeProvider

			.when('/users', {
				templateUrl : 'pages/users.html',
				controller  : 'usersController',
				controllerAs: 'usersCtrl'
			})

			.when('/users/:username', {
				templateUrl : 'pages/user.html',
				controller  : 'userController'
			})

			.when('/groups', {
				templateUrl : 'pages/groups.html',
				controller  : 'groupsController',
				controllerAs: 'groupsCtrl'
			})

			.when('/groups/:groupname', {
				templateUrl : 'pages/group.html',
				controller  : 'groupController'
			});    
}