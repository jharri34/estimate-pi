'use strict';

/**
 * @ngdoc overview
 * @name estimatePiApp
 * @description
 * # estimatePiApp
 *
 * Main module of the application.
 */
angular
  .module('estimatePiApp', [
    'ngRoute',
    'ngSanitize'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
