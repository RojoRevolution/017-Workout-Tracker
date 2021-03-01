const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cardioSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for this exercise"
    },
    distance: {
        type: Number,
        required: "A number of miles is required"
    },
    duration: {
        type: Number,
        required: "A number of minutes is required"
    }

});

const Cardio = mongoose.model("Cardio", cardioSchema);

module.exports = Cardio;
