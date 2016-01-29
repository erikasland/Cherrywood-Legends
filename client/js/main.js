var myModule = angular.module('myApp', ['ngRoute'])
myModule.config(function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: './../partials/start.html',
            controller: 'indexController',
            controllerAs: 'indexControl'
        })
        .when('/players', {
            templateUrl: './../partials/players.html',
            controller: 'playerController',
            controllerAs: 'playerControl'
        })
        .when('/game', {
            templateUrl: './../partials/index.html',
            controller: 'battleController',
            controllerAs: 'battleControl'
        })
})
