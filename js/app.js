var app = angular.module("app",["ngRoute"]);

app.config(function($routeProvider){
   $routeProvider
       .when("/",{
           templateUrl: "App/View/homeView.html"
       })
       .when("/contact",{
           templateUrl: "App/View/contactUsView.html"
       })
       .when("/about",{
           templateUrl: "App/View/aboutUsView.html"
       })
       .otherwise("/");
});