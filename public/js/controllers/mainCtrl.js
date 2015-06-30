var app = angular.module('appenderApp');

app.controller('mainCtrl', function($scope, $location){
	$scope.goTo = function(x){
    $location.path('/'+x);
	};
});