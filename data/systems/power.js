'use strict';

var powerSystem = {};

powerSystem.name = 'power';
powerSystem.activated = false;
powerSystem.energy = 5;

powerSystem.activate = function(ship) {
  powerSystem.activated = true;
  ship.energy = powerSystem.energy;
  console.log('Power system activated.');
};

powerSystem.shutdown = function(ship) {
  powerSystem.activated = false;
  ship.energy = 0;
  console.log('Power system deactivated.');
};

module.exports = powerSystem;