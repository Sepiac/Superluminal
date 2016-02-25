var ship = require('./ship');
var systems = require('./systems');
var locations = require('./locations');

module.exports = {
  'ship': ship,
  'systems': systems,
  'locations': locations,
  'startLocation': locations.Sol
};