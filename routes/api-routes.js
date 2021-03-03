const router = require("express").Router();
const Workout = require("../models/workout.js");

// Route to get the latest workout
router.get('/api/workouts', (req, res) => {
    // Using aggregate will also "Find" all documents in this case
    Workout.aggregate([
        {
            // $addFields will add a field to the collection, not part of the documents
            $addFields: {
                // totalDuration is the name of the field we will be adding
                totalDuration: {
                    // enclosing the following in brackets is essentially saying the value of totalDuration will = the sum of every duration field in every exercises document
                    $sum: "$exercises.duration"
                }
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

// Route to continue/update your latest workout
router.put('/api/workouts/:id', (req, res) => {
    //    GRab the id and the body from the req
    let id = req.params.id
    let body = req.body
    // find and update by the ID and push the req.body into the specific document
    Workout.findByIdAndUpdate(
        id,
        { $push: { exercises: body } },
        // Returns the object with the informaiton you just added
        { new: true },
    )
        .then(data => res.json(data))
        .catch(err => res.status(400).json(err))
})

// route to add a new workout
router.post('/api/workouts/', (req, res) => {
    // Create a new workout
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

// route to get the last 7 workouts (used for the chart page)
router.get('/api/workouts/range', (req, res) => {
    // find all - sort descending and limit the response to 7 documents
    Workout.find({}).sort({ _id: -1 }).limit(7)
        .then(rangeData => res.json(rangeData))
        .catch(err => res.status(400).json(err))
})

module.exports = router;