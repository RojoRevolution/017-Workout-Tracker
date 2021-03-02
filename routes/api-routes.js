const router = require("express").Router();
const Workout = require("../models/workout.js");

router.get('/api/workouts', (req, res) => {
    Workout.find({})
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: { $sum: "#duration" }
            }
        }
    ])
        .then(getWorkouts => {
            res.json(getWorkouts)
        })
        .catch(err => {
            res.status(400).json(err)
        });
})

router.put('/api/workouts/:id', (req, res) => {
    let id = req.params.id
    let body = req.body
    Workout.findByIdAndUpdate(
        id,
        { $push: { exercises: body } },
        { new: true },

    )
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

router.post('/api/workouts/', (req, res) => {
    Workout.create({
        day: Date.now()
    })
        .then(newWorkout => {
            res.json(newWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
});

router.get('/api/workouts/range', (req, res) => {
    Workout.find({}).sort({ _id: -1 }).limit(7)
        .then(rangeData => res.json(rangeData))
        .catch(err => res.status(400).json(err))
})

module.exports = router;