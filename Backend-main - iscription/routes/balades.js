const express = require("express");

const Balade = require("../models/baladeModel");
const {
  createBalade,
  getBalades,
  getBalade,
  updateBalade,
  deleteBalade,
} = require("../controllers/baladeController");

const router = express.Router();

// GET ALL BALADES
router.get("/balades", getBalades);

//Get single balades
router.get("/balade/:id", getBalade);

//POST NEW BALADES
router.post("/add", createBalade);

//Delet a balade
router.delete("/delete/:id", deleteBalade);

//UPDATE A BALADE
router.patch("/update/:id", updateBalade);

module.exports = router;
