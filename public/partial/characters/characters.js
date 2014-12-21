'use strict';

angular.module('universe.home', ['ngRoute'])

    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'partial/characters/character.html',
            controller: 'CharactersController'
        });
    }])

    .controller('CharactersController', function($scope) {
        $scope.characters = [];
    });
