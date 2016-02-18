'use strict';

var lifeSupportSystem = {};

lifeSupportSystem.name = 'Life_Support';
lifeSupportSystem.requiredEnergy = 3;
lifeSupportSystem.activated = false;
lifeSupportSystem.maxOxygen = 10;
lifeSupportSystem.minOxygen = 0;

lifeSupportSystem.activate = function(ship) {
  if(ship.getAvailableEnergy() >= lifeSupportSystem.requiredEnergy) {
    lifeSupportSystem.activated = true;
    console.log('Life support system activated.');
  } else {
    console.log('Insufficient energy to activate life support system.');
  }
};

lifeSupportSystem.shutdown = function() {
  lifeSupportSystem.activated = false;
  console.log('Life support system deactivated.');
};

lifeSupportSystem.onTurn = function(ship) {
  if(lifeSupportSystem.activated) {
    if(ship.oxygen < lifeSupportSystem.maxOxygen) {
      ship.oxygen ++;
    }
  } else {
    if(ship.oxygen > lifeSupportSystem.minOxygen) {
      ship.oxygen --;
      ship.health -= 10;
    }
  }
};

lifeSupportSystem.shipCallBacks = [
  lifeSupportSystem.onTurn
];

module.exports = lifeSupportSystem;