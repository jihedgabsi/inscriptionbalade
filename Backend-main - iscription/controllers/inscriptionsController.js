const Inscription = require("../models/inscriptionsModel");
const mongoose = require("mongoose");

// Get all inscriptions
const getInscriptions = async (req, res) => {
    const inscriptions = await Inscription.find({}).sort({ createdAt: -1 });
    res.status(200).json(inscriptions);
};

// Get a single inscription
const getInscription = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such inscription" });
    }

    const inscription = await Inscription.findById(id);

    if (!inscription) {
        res.status(404).json({ error: "inscription not found" });
    }

    res.status(200).json(inscription);
};

// Create new inscription
const createInscription = async (req, res) => {
    const { nom, prenom, email, telephone, nombrePersonnes } = req.body;

    try {
        const inscription = await Inscription.create({
            nom,
            prenom,
            email,
            telephone,
            nombrePersonnes,
        });

        res.status(200).json(inscription);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Delete an inscription
const deleteInscription = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such inscription" });
    }

    const inscription = await Inscription.findOneAndDelete({ _id: id });

    if (!inscription) {
        res.status(404).json({ error: "inscription not found" });
    }

    res.status(200).json({ message: "inscription deleted successfully" });
};

// Update an inscription
const updateInscription = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such inscription" });
    }

    const inscription = await Inscription.findOneAndUpdate(
        { _id: id },
        {
            $set: req.body,
        },
        { new: true }
    );

    if (!inscription) {
        res.status(404).json({ error: "inscription not found" });
    }

    res.status(200).json(inscription);
};

module.exports = {
    getInscriptions,
    getInscription,
    createInscription,
    deleteInscription,
    updateInscription,
};
