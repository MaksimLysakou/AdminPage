angular
    .module('adminPage')
    .config(config);

function config($stateProvider) {
	$stateProvider.state('main',{
        url: '',
        templateUrl: 'pages/main.html'
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

    var userState = $stateProvider.state('user',{
    	abstract: true,
        url: '/users/:username',
        templateUrl: 'pages/user.html',
        controller  : 'userController',
		controllerAs: 'userCtrl'
    });

    userState.state('user.info', {
          url: '',
          templateUrl: 'pages/user.info.html'
        });

    userState.state('user.groups', {
          url: '/groups',
          templateUrl: 'pages/user.groups.html'
        });

    var groupState = $stateProvider.state('group',{
        abstract: true,
        url: '/groups/:groupname',
        templateUrl: 'pages/group.html',
        controller  : 'groupController',
		controllerAs: 'groupCtrl'
    });

    groupState.state('group.info', {
          url: '',
          templateUrl: 'pages/group.info.html'
        });

    groupState.state('group.users', {
          url: '/users',
          templateUrl: 'pages/group.users.html'
        });
}