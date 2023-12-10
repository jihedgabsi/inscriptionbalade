const Pecheur = require("../models/pecheurModel");

const mongoose = require("mongoose");

//Get all pecheur
const getPecheurs = async (req, res) => {
  try {
    const pecheurs = await Pecheur.find().sort({ createdAt: -1 });
    res.status(200).json(pecheurs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//get a single pecheur
const getPecheur = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such pecheur" });
  }
  const pecheur = await Pecheur.findById(id);
  if (!pecheur) {
    res.status(404).json({ error: "pecheur not found" });
  }
  res.status(200).json(pecheur);
};

// create new pecheur
const createPecheur = async (req, res) => {
  const { nom, prenom, email, tel } = req.body;
  try {
    const pecheur = await Pecheur.create({
      nom,
      prenom,
      email,
      tel,
    });
    res.status(200).json(pecheur);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// delete a pecheur
const deletePecheur = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such pecheur" });
  }
  const pecheur = await Pecheur.findOneAndDelete({ _id: id });
  if (!pecheur) {
    res.status(404).json({ error: "pecheur not found" });
  }
  res.status(200).json({ message: "pecheur deleted successfully" });
};
// update a pecheur
const updatePecheur = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such pecheur" });
  }

  const pecheur = await Pecheur.findOneAndUpdate(
    { _id: id },
    {
      nom: req.body.nom,
      prenom: req.body.prenom,
      email: req.body.email,
      tel: req.body.tel,
    },
    { new: true }
  );
  res.status(200).json(pecheur);
};

module.exports = {
  createPecheur,
  getPecheurs,
  getPecheur,
  updatePecheur,
  deletePecheur,
};
