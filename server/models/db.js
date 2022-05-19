const mongoose = require('mongoose');

const MONGO_URI =
  'mongodb+srv://samhcarrasco:Welcome$5@cluster0.lbedd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    // these are options for the connect method to parse the URI
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // sets name of the database that our collections are part of
    dbName: 'pokemonData',
  })
  .then(() => console.log('connected to MongoDb'))
  .catch((err) => console.log(err));

const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  id: String,
  name: String,
  height: String,
  weight: String,
  abilities: [String],
  types: [String],
  animated_sprites: String,
  hp: Number,
  attack: Number,
  defense: Number,
  special_attack: Number,
  secial_defense: Number,
  speed: Number,
  flavor_text: String,
});

const Pokemon = mongoose.model('pokemon', pokemonSchema);

// exports all the models in an object to be used in the controller
module.exports = { Pokemon };
