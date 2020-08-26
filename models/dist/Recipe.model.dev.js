"use strict";

var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var recipeSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  level: {
    type: String,
    "enum": ["Easy Peasy", "Amateur Chef", "UltraPro Chef"]
  },
  ingredients: {
    type: [String]
  },
  cuisine: {
    type: String,
    required: true
  },
  dishType: {
    type: String,
    "enum": ["breakfast", "main_course", "soup", "snack", "drink", "dessert", "other"]
  },
  image: {
    type: String,
    "default": "https://images.media-allrecipes.com/images/75131.jpg"
  },
  duration: {
    type: Number,
    min: 0
  },
  creator: {
    type: String
  },
  created: {
    type: Date,
    "default": Date.now
  } // TODO: write the schema

});
var Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;