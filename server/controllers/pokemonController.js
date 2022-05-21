const fetch = require('node-fetch');

const models = require('../models/pokemonModel.js');
// destructure Pokemon from models for easier-to-read code
const { Pokemon } = models;

const pokemonController = {};

// create a fetch request to the API
pokemonController.getPokemon = async (req, res, next) => {
  // looping through all the pokemon
  for (let i = 1; i < 899; i++) {
    // use async/await syntax and Promise.all
    const [pokemonData, speciesData] = await Promise.all([
      fetch(`https://pokeapi.co/api/v2/pokemon/${i}`),
      fetch(`https://pokeapi.co/api/v2/pokemon-species/${i}`),
    ]);
    const pdata = await pokemonData.json();
    const sdata = await speciesData.json();
  }
};

// export the controller
module.exports = pokemonController;
