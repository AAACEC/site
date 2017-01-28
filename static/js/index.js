var app = angular.module('aaacec',['ngRoute']);

console.info('TOAQUI')
app.config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.when('/', {
        templateUrl : 'static/home.html'
    }).when('/produtos', {
        templateUrl : 'static/produtos.html'
    })
});
