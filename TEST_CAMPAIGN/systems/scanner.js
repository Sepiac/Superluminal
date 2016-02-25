'use strict';

var scannerSystem = {};

scannerSystem.name = 'Scanner';
scannerSystem.activated = false;
scannerSystem.requiredEnergy = 0;
scannerSystem.useCost = 2;

scannerSystem.activate = function() {
  scannerSystem.activated = true;
  console.log('Scanner system activated.');
};

scannerSystem.shutdown = function() {
  scannerSystem.activated = false;
  console.log('Scanner system deactivated.');
};

scannerSystem.survey = function(ship) {
  if(ship.energy >= scannerSystem.useCost) {
    ship.systems.power.energy -= scannerSystem.useCost;
    ship.energy -= scannerSystem.useCost;

    if(ship.location.resources.energy) {
      ship.systems.power.energy += ship.location.resources.energy;
      ship.energy += ship.location.resources.energy;
      ship.location.resources.energy = 0;
    }
    ship.food += ship.location.resources.food || 0;
    ship.health += ship.location.resources.health || 0;
  } else {
    console.log('Not enough energy for a survey of the area.');
  }

};

module.exports = scannerSystem;