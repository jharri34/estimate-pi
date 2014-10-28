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
    'ngSanitize',
     'tc.chartjs',
    'components'
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
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'contactCtrl'
      })
    .otherwise({
        redirectTo: '/'
      });
  });
angular.module('components', []);
