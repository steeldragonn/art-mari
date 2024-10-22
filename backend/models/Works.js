const mongoose = require("mongoose");

const workSchema = new mongoose.Schema({
  imageUrl: { type: String, required: true },
  url: { type: String },
  name: { type: String, required: true },
  size: { type: String },
  year: { type: Number },
  material: { type: String },
  description: { type: String },
  price: { type: String },
  available: { type: String },
});

const Work = mongoose.model("Work", workSchema);

module.exports = Work;
