const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5001;

app.use(express.json());

app.use(cors());

app.use(express.static("public"));

mongoose
  .connect("mongodb://localhost:27017/art-mari")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));

const workRoutes = require("./routes/WorksRoutes.js");
app.use("/api", workRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
