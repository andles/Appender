var app = angular.module('appenderApp');

app.controller('contactsCtrl', function($scope, userService){
	$scope.name = 'Andy';
  $scope.getContacts = function(){
    console.log('getContacts button pushed');
   userService.getContacts().then(function(resp){
    $scope.contacts = resp.data.results;
    console.log($scope.contacts)
    });
  };






});