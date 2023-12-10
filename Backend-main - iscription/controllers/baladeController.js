const Balade = require("../models/baladeModel");

const mongoose = require("mongoose");

//Get all balades

const getBalades = async (req, res) => {
  const balades = await Balade.find({}).sort({ createdAt: -1 });
  res.status(200).json(balades);
};

//get a single balade
const getBalade = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such balad" });
  }
  const balade = await Balade.findById(id);
  if (!balade) {
    res.status(404).json({ error: "balade not found" });
  }
  res.status(200).json(balade);
};

// create new balade
const createBalade = async (req, res) => {
  const { nom, date, lieu, prix, offres } = req.body;
  try {
    const balade = await Balade.create({ nom, date, lieu, prix, offres });
    res.status(200).json(balade);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
// delete a balade
const deleteBalade = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such balad" });
  }
  const balade = await Balade.findOneAndDelete({ _id: id });
  if (!balade) {
    res.status(404).json({ error: "balade not found" });
  }
  res.status(200).json({ message: "balade deleted successfully" });
};

// update a balade
const updateBalade = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such balad" });
  }

  const balade = await Balade.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );
  if (!balade) {
    res.status(404).json({ error: "balade not found" });
  }
  res.status(200).json(balade);
};

module.exports = {
  getBalades,
  getBalade,
  createBalade,
  deleteBalade,
  updateBalade,
};
