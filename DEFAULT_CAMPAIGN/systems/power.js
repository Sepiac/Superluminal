'use strict';
var _ = require('lodash');

var powerSystem = {};

powerSystem.name = 'Power';
powerSystem.activated = false;
powerSystem.requiredEnergy = 0;
powerSystem.energy = 5;

powerSystem.activate = function(ship) {
  powerSystem.activated = true;
  ship.energy = powerSystem.energy;
  console.log('Power system activated.');
};

powerSystem.shutdown = function(ship) {
  powerSystem.activated = false;
  ship.energy = 0;

  _.each(ship.systems, function(system) {
    if(system.name !== 'Power' && system.name !== 'Ship' && system.activated) {
      system.shutdown(ship);
    }
  });

  console.log('Power system deactivated.');
};

module.exports = powerSystem;