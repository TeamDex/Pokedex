const mongoose = require('mongoose');
const MONGO_URI =
  'mongodb+srv://samhcarrasco:Welcome#5@cluster0.lbedd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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
module.exports = { Pokemon };
