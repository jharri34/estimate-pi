'use strict';

/**
 * @ngdoc function
 * @name estimatePiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the estimatePiApp
 */
angular.module('estimatePiApp')
    .controller('MainCtrl', function ($scope,socket) {
        $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
        console.log($scope.userInput);
        $scope.submit = function () {
            if ($scope.text) {
                console.log($scope.text);
                $scope.text = '';
            }
        };

        //        socket.emit('begin-approximation', $scope.userInput);
        //
        //        socket.on('estimate', function (data) {
        //            console.log(data);
        //        });
        //        socket.on('expected_value', function (data) {
        //            console.log(data);
        //        });
        //        socket.on('stardard_deviation', function (data) {
        //            console.log(data);
        //        });





    });