var myApp = angular.module('myModule', []);

var myController = function($scope){
    $scope.message = "Hello World";
}

myApp.controller("myController", myController);

var myController1 = function($scope){
    var employee = {
        firstName:"Mark",
        lastName:"Waugh",
        dept:"HR"
    }
    $scope.emp = employee;
}

myApp.controller("myController1", myController1);
