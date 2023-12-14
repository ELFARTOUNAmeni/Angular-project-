// src/immobilier/immobilierModel.js
const mongoose = require('mongoose');

const realtySchema = new mongoose.Schema({
  address: { type: String, required: true },
  price: { type: Number, required: true },
  bedrooms: { type: Number, required: true },
  bathrooms: { type: Number, required: true },
  imageUrl: { type: String },
});

const Realty = mongoose.model('Realty', realtySchema);

module.exports = Realty;
