const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const baladeSchema = new Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    lieu: {
      type: String,
      required: true,
    },
    prix: {
      type: Number,
      required: true,
    },
    offres: {
      type: Array,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Balade", baladeSchema);
