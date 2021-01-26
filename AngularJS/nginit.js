var app = angular
        .module("myModule", [])
        .controller("myController", function ($scope) {
            var countries = [
                {
                    name: "India",
                    cities: [
                        { name: "Hyderabad" },
                        { name: "Chennai" }
                    ]
                },
                {
                    name: "USA",
                    cities: [
                        { name: "Los Angeles" },
                        { name: "Chicago" },
                    ]
                }
            ];

            $scope.countries = countries;
        });