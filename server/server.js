const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// CORS
app.use(cors());
app.use(express.json());
// declare PORT
const PORT = 3000;

const pokemonController = require('./pokemonController.js');
// routes
// app.use
// static files served?
// global error handler

module.exports = app;
