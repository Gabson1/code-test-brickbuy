const mongoose = require('mongoose');

const { Schema } = mongoose;

const EstateSchema = new Schema({
  address: { type: String, required: true },
  size: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Estates', EstateSchema, 'estates');