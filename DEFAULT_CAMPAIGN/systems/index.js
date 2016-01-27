var powerSystem = require('./power');
var navigationSystem = require('./navigation');
var consoleSystem = require('./console');
var lifeSupportSystem = require('./life-support');
module.exports = {
  'power': powerSystem,
  'navigation': navigationSystem,
  'console': consoleSystem,
  'life-support': lifeSupportSystem
};