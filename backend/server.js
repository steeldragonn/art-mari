require("events").EventEmitter.defaultMaxListeners = 30; // THIS
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5001;

const workRoutes = require("./routes/WorksRoutes.js");
const collectionsRoutes = require("./routes/CollectionsRoutes.js");

app.use(express.json());

app.use(cors());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something went wrong!");
});

app.use(express.static("public"));

app.use(cors({ origin: "http://localhost:3000" }));

mongoose
  .connect("mongodb://localhost:27017/art-mari")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

app.use("/api", workRoutes);
app.use("/api", collectionsRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
