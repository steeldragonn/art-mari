const express = require("express");
const router = express.Router();
const Collection = require("../models/Collections");
const Work = require("../models/Works");
const { ObjectId } = require("mongodb");

router.get("/collections", async (req, res) => {
  try {
    console.log("see the collections 1 :");
    const collections = await Collection.find().populate("works");
    console.log("see the collections 2:", collections);
    res.json(collections);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch collections", error: error.message });
  }
});

// Get a single collection by ID
router.get("/collections/:id", async (req, res) => {
  try {
    const collection = await Collection.findById(req.params.id).populate(
      "works"
    );
    if (!collection)
      return res.status(404).json({ message: "Collection not found" });
    res.json(collection);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching collection", error: error.message });
  }
});

//get work by id
// router.get("/works/:id", async (req, res) => {
//   try {
//     const work = await Work.findById(req.params.id);
//     if (!work) {
//       return res.status(404).json({ message: "Work not found" });
//     }
//     res.json(work);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching work details", error: error.message });
//   }
// });

// router.get("/works/:id", async (req, res) => {
//   try {
//     const { id } = req.params;
//     // Validate and convert the id if necessary
//     const work = await Work.findOne({
//       _id: ObjectId.isValid(id) ? new ObjectId(id) : id,
//     });

//     if (!work) {
//       return res.status(404).json({ message: "Work not found" });
//     }
//     res.json(work);
//   } catch (error) {
//     res
//       .status(500)
//       .json({ message: "Error fetching work details", error: error.message });
//   }
// });

router.get("/work/:id", async (req, res) => {
  try {
    const { id } = req.params;

    // Check if id is a valid ObjectId
    if (!ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const work = await Work.findById(id);

    if (!work) {
      return res.status(404).json({ message: "Work not found" });
    }
    res.json(work);
  } catch (error) {
    console.error("Error fetching work details:", error); // Log the error for debugging
    res
      .status(500)
      .json({ message: "Error fetching work details", error: error.message });
  }
});

// Create a new collection
router.post("/collections", async (req, res) => {
  const { name, imageUrl, works } = req.body;

  if (!name || !imageUrl || !works || works.length === 0) {
    return res.status(400).json({
      message:
        "All fields are required and works must contain at least one work",
    });
  }

  const collection = new Collection({
    name,
    imageUrl,
    works,
  });

  try {
    const newCollection = await collection.save();
    res.status(201).json(newCollection);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error creating collection", error: error.message });
  }
});

// Update a collection by ID
router.put("/collections/:id", async (req, res) => {
  try {
    const collection = await Collection.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    ).populate("works");
    if (!collection)
      return res.status(404).json({ message: "Collection not found" });
    res.json(collection);
  } catch (error) {
    res
      .status(400)
      .json({ message: "Error updating collection", error: error.message });
  }
});

// Delete a collection by ID
router.delete("/collections/:id", async (req, res) => {
  try {
    const collection = await Collection.findByIdAndDelete(req.params.id);
    if (!collection)
      return res.status(404).json({ message: "Collection not found" });
    res.json({ message: "Collection deleted" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error deleting collection", error: error.message });
  }
});

module.exports = router;
