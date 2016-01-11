'use strict';


var ship = require('./data/ship');
var systems = require('./data/systems');
var locations = require('./data/locations');

ship.systems = systems;
ship.systems.ship = ship;
ship.location = locations.Sol;

var prompt = require('prompt');

var runCommand = function() {

};

var getCommand = function() {
  prompt.start();
  prompt.get(['command'], function(err, result) {
    var currentSystem = result.command.split(' ')[0];
    var currentCommand = result.command.split(' ')[1];
    var currentArgument = result.command.split(' ')[2];

    try {
      ship.systems[currentSystem][currentCommand](ship, currentArgument);
    } catch (err){
      console.log(err);
      //console.log('Ship command not found.');
    };


    if (currentCommand !== 'exit' && currentSystem !== 'exit') {
      getCommand();
    }
  });
  prompt.resume();
};

getCommand();
