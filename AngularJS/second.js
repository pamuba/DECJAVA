var myApp = angular.module('myModule', []);

var myController = function($scope){
    $scope.message = "Hello World";
}

myApp.controller("myController", myController);
