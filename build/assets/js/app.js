!function(){"use strict";function config($urlProvider,$locationProvider){$urlProvider.otherwise("/"),$locationProvider.html5Mode({enabled:!1,requireBase:!1}),$locationProvider.hashPrefix("!")}function run(){FastClick.attach(document.body)}angular.module("application",["ui.router","ngAnimate","foundation","foundation.dynamicRouting","foundation.dynamicRouting.animations"]).config(config).run(run),config.$inject=["$urlRouterProvider","$locationProvider"];var app=angular.module("application");app.controller("mainctrl",["$scope","$http",function($scope){$scope.elems=["Element 1","Element 2","Element 3"],$scope.categories=["Side bacon","Middle bacon","Back bacon","Cottage bacon","Jowl bacon","Slab bacon"]}])}();