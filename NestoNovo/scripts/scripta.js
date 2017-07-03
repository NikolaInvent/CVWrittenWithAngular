/// <reference path="angular.min.js" />

var app = angular.module("Myapp", ["ngRoute"])
.config(function ($routeProvider,$locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
    .when("/omeni", {
        templateUrl: "Partiala/omeni.html",
        controller: "omeniController"
    })
        .when("/znanja", {

            templateUrl: "Partiala/znanja.html",
            controller: "znanjaController"
        })
}).controller("omeniController", function ($scope) {

    $scope.message = "About me"
}).controller("znanjaController", function ($scope) {
    $scope.message = "Knowledge"

    $scope.znanja = ["C#", "ASP.NET MVC", "SQL Server", "Html 5", "Css 3", "Javascript", "jQuery", "Bootstrap", "AngularJS"]
});