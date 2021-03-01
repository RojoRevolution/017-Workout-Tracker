const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const resistanceSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Enter a name for this exercise"
    },
    weight: {
        type: Number,
        required: "A number of weight used is required"
    },
    sets: {
        type: Number,
        required: "A number of sets is required"
    },
    reps: {
        type: Number,
        required: "A number of reps is required"
    },
    duration: {
        type: Number,
        required: "A number of minutes is required"
    }

});

const Resistance = mongoose.model("Resistance", resistanceSchema);

module.exports = Resistance;
