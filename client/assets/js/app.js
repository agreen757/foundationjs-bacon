(function() {
  'use strict';  
  angular.module('application', [
    'ui.router',
    'ngAnimate',

    //foundation
    'foundation',
    'foundation.dynamicRouting',
    'foundation.dynamicRouting.animations'
  ])/*.controller('mainctrl',['$scope','$http',function($scope,$http){
      console.log('in controller')
  }])*/
    .config(config)
    .run(run)
  ;

  config.$inject = ['$urlRouterProvider', '$locationProvider'];

  function config($urlProvider, $locationProvider) {
    $urlProvider.otherwise('/');
    
    

    $locationProvider.html5Mode({
      enabled:false,
      requireBase: false
    });

    $locationProvider.hashPrefix('!');
  }
  //*******************    
  //DEFINE CONTROLLER  
    
  var app = angular.module('application');
  app.controller('mainctrl',['$scope','$http', function($scope,$http){
      $scope.elems = ['Element 1','Element 2', 'Element 3']
      $scope.categories = ['Side bacon','Middle bacon', 'Back bacon', 'Cottage bacon', 'Jowl bacon','Slab bacon']
      
  }]) 

  function run() {
    FastClick.attach(document.body);
  }

})();
