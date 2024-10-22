const mongoose = require("mongoose");

const collectionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  works: [{ type: mongoose.Schema.Types.ObjectId, ref: "Work" }],
});

const Collection = mongoose.model("Collection", collectionSchema);
module.exports = Collection;
