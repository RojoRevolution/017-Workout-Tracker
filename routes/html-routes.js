const router = require("express").Router();


router.get('/', (req, res) => {
    // Select, create, etc goes here
    res.sendFile('/public/index.html', { root: '.' })
})

router.get('/stats', (req, res) => {
    // Select, create, etc goes here
    res.sendFile('/public/stats.html', { root: '.' })
})

router.get('/exercise', (req, res) => {
    // Select, create, etc goes here
    res.sendFile('/public/exercise.html', { root: '.' })
})

module.exports = router;
