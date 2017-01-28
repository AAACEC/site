var app = angular.module('aaacec',['ngRoute']);

app.config(function($routeProvider, $locationProvider) {

    $routeProvider.when('/', {
        templateUrl : 'pages/home.html'
    }).when('/produtos', {
        templateUrl : 'pages/produtos.html'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

});

app.directive('navMenu', function() {
	return {
		restrict: 'E',
		templateUrl: 'directives/menu.html'
	};
});
