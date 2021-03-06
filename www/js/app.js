// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'rw.moneymask'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('flexCalcCtrl', function($scope){

  $scope.cardColor = "";
  $scope.cardText = "";  
  $scope.card = false;
 
  $scope.flexCalc = function(){

    if(!$scope.etaPrice && !$scope.gasPrice){
      $scope.cardColor = "err";
      $scope.cardText = "Insira o preço dos combustíveis!!!";
      $scope.card = true;
    }else{
      if($scope.etaPrice/$scope.gasPrice <= 0.7){
        console.log("alc");
        $scope.cardColor = "eta";
        $scope.cardText = "É mais vantajoso abastecer com Etanol.";
        $scope.card = true;
      }else{
        console.log("gas");
        $scope.cardColor = "gas";
        $scope.cardText = "É mais vantajoso abastecer com Gasolina.";
        $scope.card = true;
      }
    }      
    
  }

})