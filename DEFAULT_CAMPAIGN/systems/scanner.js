'use strict';

var scannerSystem = {};

scannerSystem.name = 'Scanner';
scannerSystem.activated = false;
scannerSystem.requiredEnergy = 0;

scannerSystem.activate = function() {
  scannerSystem.activated = true;
  console.log('Scanner system activated.');
};

scannerSystem.shutdown = function() {
  scannerSystem.activated = false;
  console.log('Scanner system deactivated.');
};

scannerSystem.survey = function(ship) {
  ship.energy += ship.location.resources.energy || 0;
  ship.food += ship.location.resources.food || 0;
  ship.health += ship.location.resources.health || 0;
};

module.exports = scannerSystem;