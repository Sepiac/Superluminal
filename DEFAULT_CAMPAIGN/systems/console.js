'use strict';

var consoleSystem = {};

consoleSystem.name = 'Console';
consoleSystem.activated = false;
consoleSystem.requiredEnergy = 3;

consoleSystem.activate = function(ship) {
  if(ship.getAvailableEnergy() >= consoleSystem.requiredEnergy) {
    consoleSystem.activated = true;
    console.log('Console system activated.');
  } else {
    console.log('Insufficient energy to activate console system.');
  }
};

consoleSystem.shutdown = function() {
  consoleSystem.activated = false;
  console.log('Console system deactivated.');
};

consoleSystem.clear = function() {
  for(var i=0; i<100; i++) {
    console.log();
  }
};

module.exports = consoleSystem;