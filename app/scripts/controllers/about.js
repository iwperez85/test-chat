'use strict';

/**
 * @ngdoc function
 * @name testChatApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testChatApp
 */
angular.module('testChatApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
