'use strict';

var ship = {};

ship.name = 'ship';
ship.location = {};
ship.activated = true;

ship.energy = 5;
ship.systems = {};

ship.status = function() {
  for (var system in ship.systems) {
    var currentSystem = ship.systems[system];
    console.log(currentSystem.name + (currentSystem.activated ? '*':''));
  }
}

ship.getAvailableEnergy = function() {
  var amountOfUsedEnergy = 0;

  for(var system in ship.systems) {
    var currentSystem = ship.systems[system];
    if(currentSystem.activated && currentSystem.requiredEnergy) {
      amountOfUsedEnergy += currentSystem.requiredEnergy;
    }
  }
  return ship.energy - amountOfUsedEnergy;
}

module.exports = ship;