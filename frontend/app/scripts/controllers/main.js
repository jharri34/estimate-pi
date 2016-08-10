'use strict';

/**
 * @ngdoc function
 * @name estimatePiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the estimatePiApp
 */
angular.module('estimatePiApp')
    .controller('MainCtrl', function ($scope, socket) {

        $scope.estimates = [];
        $scope.chart = null;

        $scope.submit = function () {
            if ($scope.text) {
                socket.emit('begin-approximation', $scope.text);
                console.log($scope.text);
                $scope.text = '';

            }
        };

        socket.on('estimate', function (data) {
            console.log(data);
                        $scope.estimates = data;
            $scope.data = {
            labels: $scope.estimates.slice(0,20),
            datasets: [
                {
                    label: 'My First dataset',
                    fillColor: 'rgba(220,220,220,0.2)',
                    strokeColor: 'rgba(220,220,220,1)',
                    pointColor: 'rgba(220,220,220,1)',
                    pointStrokeColor: '#fff',
                    pointHighlightFill: '#fff',
                    pointHighlightStroke: 'rgba(220,220,220,1)',
                    data: $scope.estimates.slice(0,20)
        }

      ]
        };

        // Chart.js Options
        $scope.options = {

            // Sets the chart to be responsive
            responsive: true,

            //Boolean - Whether to show lines for each scale point
            scaleShowLine: true,

            //Boolean - Whether we show the angle lines out of the radar
            angleShowLineOut: true,

            //Boolean - Whether to show labels on the scale
            //        scaleShowLabels: false,

            // Boolean - Whether the scale should begin at zero
            scaleBeginAtZero: true,

            //String - Colour of the angle line
            angleLineColor: 'rgba(0,0,0,.1)',

            //Number - Pixel width of the angle line
            angleLineWidth: 1,

            //Boolean - Whether to show a dot for each point
            pointDot: true,

            //Number - Radius of each point dot in pixels
            pointDotRadius: 3,

            //Number - Pixel width of point dot stroke
            pointDotStrokeWidth: 1,

            //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
            pointHitDetectionRadius: 20,

            //Boolean - Whether to show a stroke for datasets
            datasetStroke: true,

            //Number - Pixel width of dataset stroke
            datasetStrokeWidth: 2,

            //Boolean - Whether to fill the dataset with a colour
            datasetFill: true,

            //String - A legend template
            legendTemplate: '<ul class="tc-chart-js-legend"><% for (var i=0; i<datasets.length; i++){%><li><span style="background-color:<%=datasets[i].strokeColor%>"></span><%if(datasets[i].label){%><%=datasets[i].label%><%}%></li><%}%></ul>'
        };
        });
        socket.on('expected_value', function (data) {
            console.log(data);
            $scope.expected_value=data;
        });
        socket.on('stardard_deviation', function (data) {
            console.log(data);
            $scope.stardard_deviation=data;
        });




    });
