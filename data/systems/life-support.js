'use strict';

var lifeSupportSystem = {};

lifeSupportSystem.name = 'Life_Support';
lifeSupportSystem.requiredEnergy = 3;
lifeSupportSystem.activated = false;

lifeSupportSystem.activate = function() {
  lifeSupportSystem.activated = true;
  console.log('Life support system activated.');
};

lifeSupportSystem.shutdown = function() {
  lifeSupportSystem.activated = false;
  console.log('Life support system deactivated.');
};

lifeSupportSystem.onTurn = function(ship) {
  if(ship.food > 0) {
    ship.food -= 1;
  }
  if(ship.food < 1) {
    ship.health -= 10;
  }
};

lifeSupportSystem.shipCallBacks = [
  lifeSupportSystem.onTurn
];

module.exports = lifeSupportSystem;