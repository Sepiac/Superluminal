var ship = require('./ship');
var systems = require('./systems');
var locations = require('./locations');

ship.systems = systems;
ship.systems.ship = ship;
ship.location = locations.Sol;

module.exports = {
  'ship': ship
};