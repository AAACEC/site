var app = angular.module('aaacec',['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl : 'pages/home.html'
    }).when('/produtos', {
        templateUrl : 'pages/produtos.html'
    }).when('/eventos', {
        templateUrl : 'pages/eventos.html'
    }).when('/esportes', {
        templateUrl : 'pages/esportes.html'
    }).when('/contato', {
        templateUrl : 'pages/contato.html'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

});

app.directive('navMenu', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/menu.html',
        scope: {
			pageContext: '@context'
		}
	};
});

app.directive('footer', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/footer.html'
	};
});

app.controller('EventsCtrl', function() {
    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev'
    });
});
