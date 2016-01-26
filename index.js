'use strict';


var ship = require('./data/ship');
var systems = require('./data/systems');
var locations = require('./data/locations');

ship.systems = systems;
ship.systems.ship = ship;
ship.location = locations.Sol;

var prompt = require('prompt');

for (var system in ship.systems) {
  var currentSystem = ship.systems[system];
  if(currentSystem.shipCallBacks) {
    ship.callBacks = ship.callBacks.concat(currentSystem.shipCallBacks);
  }
}

var getCommand = function() {
  prompt.start();
  prompt.get(['command'], function(err, result) {
    var currentSystem = result.command.split(' ')[0];
    var currentCommand = result.command.split(' ')[1];
    var currentArgument = result.command.split(' ')[2];

    if (currentSystem !== 'exit' && ship.health > 0) {
      for(var callBack in ship.callBacks) {
        var currentCallBack = ship.callBacks[callBack];
        currentCallBack(ship);
      }
      try {
        if(ship.systems[currentSystem].activated || currentCommand === 'activate') {
          ship.systems[currentSystem][currentCommand](ship, currentArgument);
        } else {
          console.log(ship.systems[currentSystem].name + " is not activated.");
        }
      } catch (err){
        console.log(err);
        //console.log('Ship command not found.');
      };


      getCommand();
    }

  });
  prompt.resume();
};

getCommand();
