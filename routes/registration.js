const express = require('express')
const router = express.Router()

// IMporting Models
const hackathon = require('../models/hackathon')

router.post('/registerHackathon', (req, res) => {
    let newRegisteredTeam = new hackathon(req.body)
    newRegisteredTeam.save().then((savedTeam) => {
        if (savedTeam) {
            res.json({ done: true, savedTeam })
        }
        else {
            res.json({ done: false })
        }
    })
})

module.exports = router