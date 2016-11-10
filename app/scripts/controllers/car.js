'use strict';

/**
 * @ngdoc function
 * @name exoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the exoApp
 */
angular.module('exoApp')
  .controller('CarCtrl', function ($scope, $routeParams, $http) {
    $http.get('./data/cars.json')
      .then(function (res) {
          $scope.cars = res.data;
          $scope.car = $scope.cars.find(getCar);
    });

    function getCar(car) {
      return car.id === $routeParams.id;
    }
    

  })

  .controller('ctrlFilter', function ($scope) {
      $scope.ctrlReadOnly = false;
  });
