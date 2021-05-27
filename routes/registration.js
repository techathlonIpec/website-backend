const express = require('express')
const router = express.Router()

// IMporting Models
const hackathon = require('../models/hackathon')
const speciawar = require('../models/speciaWar')
const infomaze = require('../models/infomaze')
const captureTheFlag = require('../models/captureTheFlag')
const vividly = require('../models/vividly')


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

router.post('/registerSpeciaWar', (req, res) => {
    let newRegisteredTeam = new speciawar(req.body)
    newRegisteredTeam.save().then((savedTeam) => {
        if (savedTeam) {
            res.json({ done: true, savedTeam })
        }
        else {
            res.json({ done: false })
        }
    })
})

router.post('/registerInfomaze', (req, res) => {
    let newRegisteredTeam = new infomaze(req.body)
    newRegisteredTeam.save().then((savedTeam) => {
        if (savedTeam) {
            res.json({ done: true, savedTeam })
        }
        else {
            res.json({ done: false })
        }
    })
})

router.post('/registerCaptureTheFlag', (req, res) => {
    let newRegisteredTeam = new captureTheFlag(req.body)
    newRegisteredTeam.save().then((savedTeam) => {
        if (savedTeam) {
            res.json({ done: true, savedTeam })
        }
        else {
            res.json({ done: false })
        }
    })
})


router.post('/registerVividly', (req, res) => {
    let newRegisteredTeam = new vividly(req.body)
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