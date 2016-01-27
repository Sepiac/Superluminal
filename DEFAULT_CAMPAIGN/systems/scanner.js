'use strict';

var scannerSystem = {};

scannerSystem.name = 'Scanner';
scannerSystem.activated = false;

scannerSystem.activate = function() {
  scannerSystem.activated = true;
  console.log('Scanner system activated.');
};

scannerSystem.shutdown = function() {
  scannerSystem.activated = false;
  console.log('Scanner system deactivated.');
};

module.exports = scannerSystem;