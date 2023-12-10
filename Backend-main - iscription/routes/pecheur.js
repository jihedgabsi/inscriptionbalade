const express = require("express");

const Pecheur = require("../models/pecheurModel");
const {
  createPecheur,
  getPecheurs,
  getPecheur,
  updatePecheur,
  deletePecheur,
} = require("../controllers/pecheurController");
const router = express.Router();

// GET ALL PECHEURS
router.get("/pecheurs", getPecheurs);
// GET PECHEUR BY ID
router.get("/pecheur/:id", getPecheur);
//POST NEW PECHEUR
router.post("/add", createPecheur);
//Delet a pecheur
router.delete("/delete/:id", deletePecheur);
//UPDATE A PECHEUR
router.patch("/update/:id", updatePecheur);
module.exports = router;

