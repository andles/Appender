var app = angular.module('appenderApp');

app.controller('loginCtrl', function($scope, userService){
  
  $scope.googleLogin = function(id){
  	userService.login(id).then(function(res){
  		console.log(res);
  	})
  }

	// $scope.$on('event:google-plus-signin-success', function (event,authResult) {
 //    // Send login to server or save into cookie
 //  });

 //  $scope.$on('event:google-plus-signin-failure', function (event,authResult) {
 //    // Auth failure or signout detected
 //  });
});