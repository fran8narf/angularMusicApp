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

angularMusicApp.controller('mainCntrlr', function($scope, $rootScope, MetaService) {
    $scope.message = 'You are in the Homepage!';
    $scope.title = 'Home';
    $rootScope.metaservice = MetaService;
    $rootScope.metaservice.set('Angular Rocks', 'Esto es la descripción por defecto', 'angular, rocks, default');
});

angularMusicApp.controller('fooCntrlr', function($scope, $rootScope, MetaService) {
    $scope.message = 'En construcción!';
    $scope.title = 'Foo';
    $rootScope.metaservice = MetaService;
    $rootScope.metaservice.set('Angular Rocks', 'Esto es la descripción por defecto', 'angular, rocks, default');
});

angularMusicApp.controller('barCntrlr', function($scope, $rootScope, MetaService) {
    $scope.message = 'En construcción!';
    $scope.title = 'Bar';
    $rootScope.metaservice = MetaService;
    $rootScope.metaservice.set('Angular Rocks', 'Esto es la descripción por defecto', 'angular, rocks, default');
});

angularMusicApp.controller('rollingsCntrlr', function($scope, $sce, $rootScope, MetaService) {
    $scope.message = 'The Rolling Stones';
    $scope.title = 'The Rolling Stones';
    $scope.image = 'http://www.billboard.com/files/media/the-rolling-stones-1964-billboard-650.jpg';
    $scope.video = $sce.trustAsResourceUrl('https://www.youtube.com/embed/O4irXQhgMqg');

    $rootScope.metaservice = MetaService;
    $rootScope.metaservice.set("The Rolling Stones","The Rolling Stones es una banda británica de rock originaria de Londres. La banda se fundó en abril de 19622 por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Ian Stewart y Charlie Watts.2 Brian Jones fue despedido en junio de 1969, falleciendo tres semanas después, siendo reemplazado por el guitarrista Mick Taylor, que dejaría el grupo en 1975 y sería a su vez reemplazado por Ron Wood. Con el retiro de Bill Wyman en 1993 se incluyó al bajista Darryl Jones que, aunque toca con la banda desde la grabación del álbum Voodoo Lounge en 1994, no es un miembro oficial.","rock, jagger, londres");

});

angularMusicApp.controller('beatlesCntrlr', function($scope, $sce, $rootScope, MetaService) {
    $scope.message = 'The Beatles';
    $scope.title = 'The Beatles';
    $scope.image = 'http://cdn4.pitchfork.com/news/66941/b305b79a.jpg';
    $scope.video = $sce.trustAsResourceUrl('https://www.youtube.com/embed/Ho2e0zvGEWE');

    $rootScope.metaservice = MetaService;
    $rootScope.metaservice.set('The Beatles', 'The Beatles fue una banda de pop/rock inglesa activa durante la década de 1960, y reconocida como la más exitosa comercialmente y críticamente aclamada en la historia de la música popular.1 2 3 4 5 Formada en Liverpool, estuvo constituida desde 1962 por John Lennon (guitarra rítmica, vocalista), Paul McCartney (bajo, vocalista), George Harrison (guitarra solista, vocalista) y Ringo Starr (batería, vocalista). Enraizada en el skiffle y el rock and roll de los años cincuenta, la banda trabajó más tarde con distintos géneros musicales, que iban desde las baladas pop hasta el rock psicodélico, incorporando a menudo elementos clásicos, entre otros, de forma innovadora en sus canciones. La naturaleza de su enorme popularidad, que había emergido primeramente con la moda de la «Beatlemanía», se transformó al tiempo que sus composiciones se volvieron más sofisticadas. Llegaron a ser percibidos como la encarnación de los ideales progresistas, extendiendo su influencia en las revoluciones sociales y culturales de la década de 1960.', 'Liverpool, pop, rock');
});

angularMusicApp.controller('queenCntrlr', function($scope, $sce, $rootScope, MetaService) {
    $scope.message = 'Queen';
    $scope.title = 'Queen';
    $scope.image = 'http://www.officialcharts.com/imagegen.ashx?image=/media/317949/queen.jpg&width=796&height=420';
    $scope.video = $sce.trustAsResourceUrl('https://www.youtube.com/embed/fJ9rUzIMcZQ');

    $rootScope.metaservice = MetaService;
    $rootScope.metaservice.set('Queen', 'Queen es una banda británica de rock formada en 1970 en Londres por el cantante Freddie Mercury, el guitarrista Brian May, el baterista Roger Taylor y el bajista John Deacon. Si bien el grupo ha presentado bajas de dos de sus miembros (Freddie Mercury, fallecido en 1991, y John Deacon, retirado en 1997), los integrantes restantes, May y Taylor, continúan trabajando bajo el nombre Queen, por lo que la banda aún es considerada activa.', 'Freddie, Mercury, Reino, Unido');
});


//Metadatos service

angularMusicApp.service('MetaService', function() {
   var title = 'Angular Rocks';
   var metaDescription = 'Esto es la descripción por defecto';
   var metaKeywords = 'angular, rocks, default';
   return {
      set: function(newTitle, newMetaDescription, newKeywords) {
          metaKeywords = newKeywords;
          metaDescription = newMetaDescription;
          title = newTitle; 
      },
      metaTitle: function(){ return title; },
      metaDescription: function() { return metaDescription; },
      metaKeywords: function() { return metaKeywords; }
   }
});