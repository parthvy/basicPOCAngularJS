var app = angular.module('user-todo-app', [ 'ui.router', 'ngStorage' ]);

app.config(function($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.otherwise('/login');

	$stateProvider
	.state('userToDo', {
		url : '/user-to-do',
		templateUrl : 'pages/user-to-do.html',
		controller : 'user-to-do-controller'
	}).state('login', {
		url : '/login',
        templateUrl : 'pages/login.html',
		controller : 'login-to-do-controller'
	});

});