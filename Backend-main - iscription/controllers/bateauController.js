const Bateau = require("../models/bateauModel");

const mongoose = require("mongoose");

//Get all bateaux
const getBateaux = async (req, res) => {
    const bateaux = await Bateau.find({}).sort({ createdAt: -1 });
    res.status(200).json(bateaux);
};

//get a single bateau
const getBateau = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such bateau" });
    }
    const bateau = await Bateau.findById(id);
    if (!bateau) {
        res.status(404).json({ error: "bateau not found" });
    }
    res.status(200).json(bateau);
};

// create new bateau
const createBateau = async (req, res) =>{
    const{ nom,matricule,capacite} = req.body;
    try{
        const bateau = await Bateau.create({nom, matricule, capacite});
        res.status(200).json(bateau);
    }catch(error){
        res.status(400).json({error: error.message});
    }
}

// delete a bateau
const deleteBateau = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such bateau" });
    }
    const bateau = await Bateau.findOneAndDelete({ _id: id });
    if (!bateau) {
        res.status(404).json({ error: "bateau not found" });
    }
    res.status(200).json({ message: "bateau deleted successfully" });
};

// update a bateau
const updateBateau =  async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: "no such bateau" });
    }

    const bateau = await Bateau.findOneAndUpdate(
        { _id: id },
        {
            $set: req.body,
        },
        { new: true }
    );
    if (!bateau) {
        res.status(404).json({ error: "bateau not found" });
    }
    res.status(200).json(bateau);
};

module.exports = {
    getBateaux,
    getBateau,
    createBateau,
    deleteBateau,
    updateBateau,
}; 