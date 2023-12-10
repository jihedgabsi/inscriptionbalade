const express = require("express");

const Bateau = require("../models/bateauModel");
const {
    createBateau,
    getBateaux,
    getBateau,
    updateBateau,
    deleteBateau,
} = require("../controllers/bateauController");

const router = express.Router();

// GET ALL BATEAUX
router.get("/bateaux", getBateaux);

//Get single bateaux
router.get("/bateau/:id", getBateau);


//POST NEW BATEAUX
router.post("/add", createBateau);

//Delete a bateau
router.delete("/delete/:id", deleteBateau);

//UPDATE A BATEAU
router.patch("/update/:id", updateBateau);

module.exports = router;

