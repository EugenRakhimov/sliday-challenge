// Generated by CoffeeScript 1.10.0
(function() {
  'use strict';
  var PageCtrl = angular.module('app.page.ctrls', []).controller('invoiceCtrl', [
    '$scope', '$window', function($scope, $window) {
      return $scope.printInvoice = function() {
        var originalContents, popupWin, printContents;
        printContents = document.getElementById('invoice').innerHTML;
        originalContents = document.body.innerHTML;
        popupWin = window.open();
        popupWin.document.open();
        popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="styles/main.css" /></head><body onload="window.print()">' + printContents + '</html>');
        return popupWin.document.close();
      };
    }
  ]);

  PageCtrl.controller('LoginController', ['$scope','$http', function ($scope, $http){

  // $scope.isLoggedIn = AuthService.isLoggedIn();
  $scope.login = function(admin) 
  {
    $http.post('/session', admin)
        .success(function after_login(response) {
            console.log(response); 
         })
        .error(function(response){console.log(response);});

  };
  $scope.logout = function()
  { 
    // AuthService.logout();
    // $scope.isLoggedIn = AuthService.isLoggedIn();
  };
  // $scope.isLoggedIn = AuthService.isLoggedIn();
  
}]);

}).call(this);
