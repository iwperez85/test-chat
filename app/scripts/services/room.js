'use strict';

/**
 * @ngdoc service
 * @name testChatApp.room
 * @description
 * # room
 * Factory in the testChatApp.
 */
angular.module('testChatApp')
  .factory('Room', ['$firebaseArray', function ($firebaseArray) {

    var firebaseRef = new Firebase('test-chat1.firebaseIO.com');
    var rooms = $firebaseArray(firebaseRef.child('rooms'));

    return {
      all: rooms,
      add: function (data) {
        rooms.$add({name: 'room 1', user: 'will'});
      }
    };
  }]);
