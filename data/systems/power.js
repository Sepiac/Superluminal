'use strict';

var powerSystem = {};

powerSystem.name = 'power';
powerSystem.activated = false;

powerSystem.activate = function() {
  powerSystem.activated = true;
  console.log('Power system activated.');
};

powerSystem.shutdown = function() {
  powerSystem.activated = false;
  console.log('Power system deactivated.');
};

module.exports = powerSystem;