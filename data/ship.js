'use strict';

var ship = {};

ship.name = 'ship';
ship.location = {};
ship.activated = true;
ship.systems = {};

ship.status = function() {
  for (var system in ship.systems) {
    var currentSystem = ship.systems[system];
    console.log(currentSystem.name + (currentSystem.activated ? '*':''));
  }
}

module.exports = ship;