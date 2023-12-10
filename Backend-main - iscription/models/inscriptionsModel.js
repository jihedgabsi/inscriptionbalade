const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const inscriptionSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    numTel: {
      type: String,
      required: true,
    },
    nbrPersonnes: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inscription", inscriptionSchema);
