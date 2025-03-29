const express = require("express");
const Mushroom = require("./schema"); // Schema should start with an uppercase letter (convention)
const router = express.Router();

// Create a new mushroom entry
router.post("/postmushroom", async (req, res) => {
    try {
        const { id, name, location, rarity, effects, discovered_by } = req.body;

        if (!id || !name || !location || !rarity) {
            return res.status(400).json({ msg: "Please provide all required fields." });
        }

        const data = new Mushroom({ id, name, location, rarity, effects, discovered_by });
        await data.save();
        res.status(201).json({ msg: "Mushroom posted successfully.", data });

    } catch (error) {
        console.error("Error posting mushroom:", error);
        res.status(500).json({ msg: "Internal server error.", error: error.message });
    }
});

// Retrieve all mushrooms
router.get("/getmushroom", async (req, res) => {
    try {
        const mushrooms = await Mushroom.find();
        res.status(200).json(mushrooms);

    } catch (error) {
        console.error("Error getting mushrooms:", error);
        res.status(500).json({ msg: "Internal server error.", error: error.message });
    }
});

// Update mushroom details
router.put("/updatemushroom/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, location, rarity, effects, discovered_by } = req.body;

        if (!name || !location || !rarity) {
            return res.status(400).json({ msg: "Please provide all details." });
        }

        const updatedMushroom = await Mushroom.findOneAndUpdate(
            { id }, 
            { name, location, rarity, effects, discovered_by },
            { new: true }
        );

        if (!updatedMushroom) {
            return res.status(404).json({ msg: "Mushroom not found." });
        }

        res.status(200).json({ msg: "Mushroom details successfully updated.", updatedMushroom });

    } catch (error) {
        console.error("Error updating mushroom:", error);
        res.status(500).json({ msg: "Internal server error.", error: error.message });
    }
});

// Delete a mushroom
router.delete("/deletemushroom/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedMushroom = await Mushroom.findOneAndDelete({ id });

        if (!deletedMushroom) {
            return res.status(404).json({ msg: "Mushroom not found." });
        }

        res.status(200).json({ msg: "Mushroom deleted successfully." });

    } catch (error) {
        console.error("Error deleting mushroom:", error);
        res.status(500).json({ msg: "Internal server error.", error: error.message });
    }
});

module.exports = router;
