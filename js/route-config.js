angular
    .module('adminPage')
    .config(config);

function config($stateProvider) {
	$stateProvider.state('index',{
        url: '/',
        templateUrl: 'index.html'
    });

	$stateProvider.state('users',{
        url: '/users',
        templateUrl: 'pages/users.html',
        controller  : 'usersController',
		controllerAs: 'usersCtrl'
    });

    $stateProvider.state('groups',{
        url: '/groups',
        templateUrl: 'pages/groups.html',
        controller  : 'groupsController',
		controllerAs: 'groupsCtrl'
    });

    $stateProvider.state('user',{
        url: '/users/:username',
        templateUrl: 'pages/user.html',
        controller  : 'userController',
		controllerAs: 'userCtrl'
    })
    	.state('user.groups', {
          url: '/user/:username/groups',
          templateUrl: 'pages/user.groups.html'
        });

    $stateProvider.state('group',{
        url: '/groups/:groupname',
        templateUrl: 'pages/group.html',
        controller  : 'groupController',
		controllerAs: 'groupCtrl'
    })
    	.state('group.users', {
          url: '/group/:groupname/users',
          templateUrl: 'pages/group.users.html'
        });
}