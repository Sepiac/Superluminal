'use strict';
var locations = require('../locations');

var navigationSystem = {};

navigationSystem.name = 'navigation';
navigationSystem.activated = false;
navigationSystem.requiredEnergy = 3;

navigationSystem.activate = function(ship) {
  if(ship.getAvailableEnergy() >= navigationSystem.requiredEnergy) {
    navigationSystem.activated = true;
    console.log('Navigation system activated.');
  } else {
    console.log('Insufficient energy to activate navigation system.');
  }
};

navigationSystem.shutdown = function() {
  navigationSystem.activated = false;
  console.log('Navigation system deactivated.');
};

navigationSystem.status = function(ship) {
  console.log(ship.location.name);
  console.log(ship.location.description);
};

navigationSystem.list = function(ship) {
  for (var location in ship.location.adjacentSystems) {
    console.log(ship.location.adjacentSystems[location]);
  }
};

navigationSystem.jump = function(ship, jumpLocation) {
  for (var location in ship.location.adjacentSystems) {
    var currentLocation = ship.location.adjacentSystems[location];

    if(currentLocation === jumpLocation) {
      ship.location = locations[currentLocation];
      console.log('Jump successful!');
    }
  }
};

module.exports = navigationSystem;