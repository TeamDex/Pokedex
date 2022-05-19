const fetch = require('node-fetch');

const models = require('../models/pokemonModel.js')
// destructure Pokemon from models for easier-to-read code
const { Pokemon } = models;

const pokemonController = {};


// export the controller
module.exports = pokemonController;