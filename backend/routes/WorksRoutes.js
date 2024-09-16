const express = require("express");
const router = express.Router();
const Work = require("../models/Works.js");

router.get("/works", async (req, res) => {
  try {
    const works = await Work.find();
    res.json(works);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/works/:id", async (req, res) => {
  try {
    const work = await Work.findById(req.params.id);
    if (!work) return res.status(404).json({ message: "Work not found" });
    res.json(work);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/works", async (req, res) => {
  const work = new Work({
    imageUrl: req.body.imageUrl,
    name: req.body.name,
    size: req.body.size,
    year: req.body.year,
    material: req.body.material,
    description: req.body.description,
    price: req.body.price,
  });

  try {
    const newWork = await work.save();
    res.status(201).json(newWork);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.put("/works/:id", async (req, res) => {
  try {
    const work = await Work.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!work) return res.status(404).json({ message: "Work not found" });
    res.json(work);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete("/works/:id", async (req, res) => {
  try {
    const work = await Work.findByIdAndDelete(req.params.id);
    if (!work) return res.status(404).json({ message: "Work not found" });
    res.json({ message: "Work deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
