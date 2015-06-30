var app = angular.module('appenderApp');

app.service('userService', ['$http', '$rootScope', '$q', function ($http, $rootScope, $q) {
  var clientId = '{194575318910-trivmr8e7ci3io77duaol99sueh0e0eq.apps.googleusercontent.com}',
      apiKey = '{AIzaSyCTGcF2RxdgsXK_x4jga77s0ey3Eik0GxE}',
      scopes = 'https://www.googleapis.com/auth/userinfo.email https://www.google.com/m8/feeds',
      domain = '{appenderApp.com}',
      userEmail = 'andykj@gmail.com',
      deferred = $q.defer();

  this.login = function () {
  	console.log(gapi.auth.authorize)
	  gapi.auth.authorize({ client_id: clientId, scope: scopes, immediate: false, hd: domain }, this.handleAuthResult);
	  console.log(deferred.promise)
	  return deferred.promise;
  };

  this.handleClientLoad = function () {
    gapi.client.setApiKey(apiKey);
    gapi.auth.init(function () { });
    window.setTimeout(checkAuth, 1);
  };

  this.checkAuth = function() {
    gapi.auth.authorize({ client_id: clientId, scope: scopes, immediate: true, hd: domain }, this.handleAuthResult );
  };

  this.handleAuthResult = function(authResult) {
    if (authResult && !authResult.error) {
        var data = {};
        gapi.client.load('oauth2', 'v2', function () {
            var request = gapi.client.oauth2.userinfo.get();
            request.execute(function (resp) {
                $rootScope.$apply(function () {
                    data.email = resp.email;
                });
            });
        });
        deferred.resolve(data);
    } else {
        deferred.reject('error');
    }
  };

  this.handleAuthClick = function (event) {
      gapi.auth.authorize({ client_id: clientId, scope: scopes, immediate: false, hd: domain }, this.handleAuthResult );
      return false;
  };

}]);