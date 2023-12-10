const express = require("express");

const Inscription = require("../models/inscriptionsModel");
const {
    createInscription,
    getInscriptions,
    getInscription,
    updateInscription,
    deleteInscription,
} = require("../controllers/inscriptionsController");

const router = express.Router();

// GET ALL INSCRIPTIONS
router.get("/inscriptions", getInscriptions);

// Get single inscription
router.get("/inscription/:id", getInscription);

// POST NEW INSCRIPTION
router.post("/add", createInscription);

// Delete an inscription
router.delete("/delete/:id", deleteInscription);

// UPDATE AN INSCRIPTION
router.patch("/update/:id", updateInscription);

module.exports = router;
