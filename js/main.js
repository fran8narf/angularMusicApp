var angularMusicApp = angular.module('angularMusicApp', ['ngRoute']);

angularMusicApp.config(function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'mainCntrlr'
        })
        .when('/foo', {
            templateUrl: 'views/foo.html',
            controller: 'fooCntrlr'
        })
        .when('/bar', {
            templateUrl: 'views/bar.html',
            controller: 'barCntrlr'
        })
        .when('/the-rolling-stones', {
        	templateUrl: 'views/rollings.html',
        	controller: 'rollingsCntrlr'
        })
        .when('/queen', {
        	templateUrl: 'views/queen.html',
        	controller: 'queenCntrlr'
        })
        .when('/the-beatles', {
        	templateUrl: 'views/beatles.html',
        	controller: 'beatlesCntrlr'
        })
        .otherwise({
            redirectTo: '/'
        });
});

angularMusicApp.controller('mainCntrlr', function($scope) {
    $scope.message = 'You are in the Homepage!';
    $scope.title = 'Home';
});

angularMusicApp.controller('fooCntrlr', function($scope) {
    $scope.message = 'En construcción!';
    $scope.title = 'Foo';
});

angularMusicApp.controller('barCntrlr', function($scope) {
    $scope.message = 'En construcción!';
    $scope.title = 'Bar';
});

angularMusicApp.controller('rollingsCntrlr', function($scope) {
    $scope.message = 'The Rolling Stones';
    $scope.title = 'The Rolling Stones';
});

angularMusicApp.controller('beatlesCntrlr', function($scope) {
    $scope.message = 'The Beatles';
    $scope.title = 'The Beatles';
});

angularMusicApp.controller('queenCntrlr', function($scope) {
    $scope.message = 'Queen';
    $scope.title = 'Queen';
});