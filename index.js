const lodash = require('lodash');
const { autos } = require('./datos');
const {animales} = require('./datos');

//elementos unicos
const autosUnicos = lodash.uniq(autos);

console.log(autosUnicos);

// metodo filter para traer todos los animales salvajes
const animalesSalvajes = lodash.filter(animales, ['tipo', 'salvaje']);
console.log(animalesSalvajes);