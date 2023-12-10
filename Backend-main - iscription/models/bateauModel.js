const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bateauSchema = new Schema(
    {
        nom: {
            type: String,
            required: true,
        }, 
        matricule: {
            type: String,
            required: true,
        },
        capacite: {
            type: Number,
            required: true,
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("Bateau", bateauSchema);