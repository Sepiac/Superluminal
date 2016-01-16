'use strict';

var consoleSystem = {};

consoleSystem.name = 'console';
consoleSystem.activated = false;
consoleSystem.requiredEnergy = 3;

consoleSystem.activate = function() {
  consoleSystem.activated = true;
  console.log('Console system activated.');
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