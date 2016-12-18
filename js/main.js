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

angularMusicApp.controller('rollingsCntrlr', function($scope, $sce) {
    $scope.message = 'The Rolling Stones';
    $scope.title = 'The Rolling Stones';
    $scope.image = 'http://www.billboard.com/files/media/the-rolling-stones-1964-billboard-650.jpg';
    $scope.video = $sce.trustAsResourceUrl('https://www.youtube.com/embed/O4irXQhgMqg');
});

angularMusicApp.controller('beatlesCntrlr', function($scope, $sce) {
    $scope.message = 'The Beatles';
    $scope.title = 'The Beatles';
    $scope.image = 'http://cdn4.pitchfork.com/news/66941/b305b79a.jpg';
    $scope.video = $sce.trustAsResourceUrl('https://www.youtube.com/embed/Ho2e0zvGEWE');

});

angularMusicApp.controller('queenCntrlr', function($scope, $sce) {
    $scope.message = 'Queen';
    $scope.title = 'Queen';
    $scope.image = 'http://www.officialcharts.com/imagegen.ashx?image=/media/317949/queen.jpg&width=796&height=420';
    $scope.video = $sce.trustAsResourceUrl('https://www.youtube.com/embed/fJ9rUzIMcZQ');

});