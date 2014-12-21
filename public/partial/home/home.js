'use strict';

angular.module('universe.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partial/home/home.html',
            controller: 'HomeController'
        });
    }])

    .controller('HomeController', function($scope) {
        $scope.name = 'David';
    });
