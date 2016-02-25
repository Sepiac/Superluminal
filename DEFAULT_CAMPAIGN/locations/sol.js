'use strict';

var sol = {};

sol.name = 'Sol';
sol.description = 'Your home planet. Known for its fields of golden grain, whose stalks tower over most buildings and, when properly harvested, can provide a week’s worth of sustenance. You’ve grown used to the constant hum of machines that make life so simple here. Your family is in a city far away--a speck in the distance. It all seems so quiet now…';

sol.adjacentSystems = [
  'Alpha_Centauri',
  'Belmarion',
  'Xantu',
  'Tryggh'
];

sol.resources = {
  energy: 5,
  food: 5
};

module.exports = sol;