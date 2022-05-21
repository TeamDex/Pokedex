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
    const pData = await pokemonData.json();
    const sData = await speciesData.json();
    
    let abilitiesData;
    // if there is a 2nd ability, then assign both abilities 
    if(pData.abilities[1].ability){
    abilitiesData = [pData.abilities[0].ability.name,pData.abilities[1].ability.name] 
    } else {
    // if there's only 1 ability, then only assign index 0
    abilitiesData = [pData.abilities[0].ability.name]
    }

      
    let typesData;
    // if there is a 2nd ability, then assign both abilities 
    if(pData.types[1].type.name){
    typesData = [pData.types[0].type.name,pData.types[1].type.name] 
    } else {
    // if there's only 1 ability, then only assign index 0
    typesData = [pData.types[0].type.name]
    }

    // consider types and abilities
    const pokemonSchema = {
      id: pData.id,
      name: pData.forms[0].name,
      //configure units******
      height: `${pData.height} + units`,
      weight: `${pData.weight} + kg`,
      abilities: abilitiesData,
      types: typesData,
      animated_sprites: ,
      hp: ,
      attack: ,
      defense: ,
      special_attack: ,
      secial_defense: ,
      speed: ,
    }; 
  }
};

// export the controller
module.exports = pokemonController;
