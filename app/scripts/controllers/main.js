'use strict';

/**
 * @ngdoc function
 * @name exoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exoApp
 */
angular.module('exoApp')
  .controller('MainCtrl', function ($scope, $http) {
    $http.get('./data/cars.json')
      .then(function (res) {
          $scope.cars = res.data;
      });
  });
