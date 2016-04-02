var app=angular.module('single-page-app',['ngRoute']);


app.config(function($routeProvider){


      $routeProvider
          .when('/',{
                templateUrl: 'html/home.html'
          })
          .when('/about',{
                templateUrl: 'html/about.html'
          });


});


app.controller('cfgController',function($scope){

      $scope.message="Hello world";

});
