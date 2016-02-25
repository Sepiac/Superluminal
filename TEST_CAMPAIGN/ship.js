'use strict';

var ship = {};

ship.name = 'Ship';
ship.location = {};
ship.activated = true;

ship.energy = 0;
ship.food = 10;
ship.health = 100;
ship.oxygen = 10;
ship.requiredEnergy = 0;
ship.systems = {};
ship.callBacks = [];

ship.status = function() {
  console.log('=========================================');
  console.log('Energy Available: ' + ship.getAvailableEnergy() + '/' + ship.energy);
  console.log('Health: ' + ship.health);
  console.log('Food: ' + ship.food);
  console.log('Oxygen: ' + ship.oxygen);
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