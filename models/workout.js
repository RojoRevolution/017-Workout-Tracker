const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: { type: Date, required: true },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Type of exercise required"
        },
        name: {
            type: String,
            trim: true,
            required: "Name of exercise required"
        },
        duration: {
            type: Number,
        },
        weight: {
            type: Number,
            required: "A number of minutes is required"
        },
        reps: {
            type: Number,
            required: "A number of minutes is required"
        },
        sets: {
            type: Number,
            required: "A number of minutes is required"
        },
        distance: {
            type: Number,
            required: "A number of minutes is required"
        },
    }]

});


const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
