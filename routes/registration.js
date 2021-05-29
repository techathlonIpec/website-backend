const express = require('express')
const router = express.Router()
const chalk = require('chalk')

// IMporting Models
const hackathon = require('../models/hackathon')
const speciawar = require('../models/speciaWar')
const infomaze = require('../models/infomaze')
const captureTheFlag = require('../models/captureTheFlag')
const vividly = require('../models/vividly')

// Importing Validation Functions
const validators = require('../functions/validation')

// Importing Node Mailer Transporter
const transporter = require('../functions/nodemailer')

// Importing Templates for mail
const templateMailGen = require('../templates/registration')


router.post('/registerHackathon', validators.validationHackathon, (req, res) => {
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

router.post('/registerSpeciaWar', validators.validationSpeciaWar, (req, res) => {
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

router.post('/registerInfomaze', validators.validationInfomaze, (req, res) => {
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

router.post('/registerCaptureTheFlag', validators.validationCaptureTheFlag, (req, res) => {
    let newRegisteredTeam = new captureTheFlag(req.body)
    newRegisteredTeam.save().then((savedTeam) => {
        if (savedTeam) {
            transporter.sendMail({
                from: process.env.MAIL_USERNAME, // sender address
                to: req.body.emailID, // list of receivers
                subject: "Techathlon Registration-2021", // Subject line
                html: templateMailGen('Capture The Flag'), // html body
            })
                .then((response) => {
                    console.log(chalk.green(response.messageId));
                    res.json({ done: true, savedTeam })
                })
        }
        else {
            res.json({ done: false })
        }
    })
})


router.post('/registerVividly', validators.validationVividly, (req, res) => {
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