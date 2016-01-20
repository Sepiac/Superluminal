'use strict';

var ship = {};

ship.name = 'Ship';
ship.location = {};
ship.activated = true;

ship.energy = 0;
ship.requiredEnergy = 0;
ship.systems = {};

ship.status = function() {
  console.log('=========================================');
  console.log('Energy Available: ' + ship.getAvailableEnergy() + '/' + ship.energy);
  for (var system in ship.systems) {
    var currentSystem = ship.systems[system];
    console.log(currentSystem.name + '(' + currentSystem.requiredEnergy + ')' +(currentSystem.activated ? '*':''));
  }
  console.log('=========================================');
};

ship.getAvailableEnergy = function() {
  var amountOfUsedEnergy = 0;

  for(var system in ship.systems) {
    var currentSystem = ship.systems[system];
    if(currentSystem.activated && currentSystem.requiredEnergy) {
      amountOfUsedEnergy += currentSystem.requiredEnergy;
    }
  }
  return ship.energy - amountOfUsedEnergy;
};

module.exports = ship;