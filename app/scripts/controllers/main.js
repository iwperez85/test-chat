'use strict';

/**
 * @ngdoc function
 * @name testChatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testChatApp
 */
angular.module('testChatApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
