'use strict';
var prompt = require('prompt');

var engine = {};

engine.init = function(campaignName) {
  engine.campaign = require('./' + campaignName);

  var ship = engine.campaign.ship;
  ship.systems = engine.campaign.systems;
  ship.systems.ship = ship;
  ship.location = engine.campaign.startLocation;

  for (var system in ship.systems) {
    var currentSystem = ship.systems[system];
    if(currentSystem.shipCallBacks) {
      ship.callBacks = ship.callBacks.concat(currentSystem.shipCallBacks);
    }
  }
};

engine.loop = function() {

  

  var getCommand = function() {

    var ship = engine.campaign.ship;
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
};

module.exports = engine;

