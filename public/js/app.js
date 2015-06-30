var app = angular.module('appenderApp', ['ngRoute', 'directive.g+signin']);

app.config(function($routeProvider){
	$routeProvider
	.when('/login', {
		templateUrl: 'view/login.html',
		controller: 'loginCtrl'
	})
	.when('/contacts', {
		templateUrl: 'view/contacts.html',
		controller: 'contactsCtrl'
	});
});