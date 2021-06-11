const express = require("express");
const router = express.Router();
const chalk = require("chalk");
const { nanoid } = require('nanoid')

// IMporting Models
const hackathon = require("../models/hackathon");
const speciawar = require("../models/speciaWar");
const infomaze = require("../models/infomaze");
const captureTheFlag = require("../models/captureTheFlag");
const vividly = require("../models/vividly");

// Importing Validation Functions
const validators = require("../functions/validation");

// Importing Node Mailer Transporter
const transporter = require("../functions/nodemailer");

// Importing Templates for mail
const templateMailGen = require("../templates/registration");

router.post(
  "/registerHackathon",
  validators.validationHackathon,
  (req, res) => {
    let data = req.body
    data.portalPassword = nanoid(10)
    if (req.body.sizeOfTeam == req.body.participants.length) {
      let newRegisteredTeam = new hackathon(data);
      newRegisteredTeam.save().then((savedTeam) => {
        if (savedTeam) {
          let emailTemplate = templateMailGen(
            "Hackathon",
            savedTeam.participants[0].name,
            savedTeam.teamName,
            savedTeam.sizeOfTeam,
            savedTeam.contactNumber,
            savedTeam.portalPassword
          );

          transporter
            .sendMail({
              from: process.env.MAIL_USERNAME,
              to: req.body.emailID,
              subject: "Techathlon Registration-2021",
              html: emailTemplate,
            })
            .then((response) => {
              console.log(chalk.green(response.messageId));
              res.json({ done: true, savedTeam });
            });
        } else {
          res.json({ done: false });
        }
      });
    }
    else {
      res.json({ done: false, error: { details: [{ message: 'Size of team and Number of participants should be same.' }] } })
    }
  }
);

router.post(
  "/registerSpeciaWar",
  validators.validationSpeciaWar,
  (req, res) => {
    if (req.body.sizeOfTeam == req.body.participants.length) {
      let newRegisteredTeam = new speciawar(req.body);
      newRegisteredTeam.save().then((savedTeam) => {
        if (savedTeam) {
          let emailTemplate = templateMailGen(
            "SpeciaWar",
            savedTeam.participants[0].name,
            savedTeam.teamName,
            savedTeam.sizeOfTeam,
            savedTeam.contactNumber
          );

          transporter
            .sendMail({
              from: process.env.MAIL_USERNAME,
              to: req.body.emailID,
              subject: "Techathlon Registration-2021",
              html: emailTemplate,
            })
            .then((response) => {
              console.log(chalk.green(response.messageId));
              res.json({ done: true, savedTeam });
            });
        } else {
          res.json({ done: false });
        }
      });
    }
    else {
      res.json({ done: false, error: { details: [{ message: 'Size of team and Number of participants should be same.' }] } })
    }
  }
);

router.post("/registerInfomaze", validators.validationInfomaze, (req, res) => {
  let newRegisteredTeam = new infomaze(req.body);
  newRegisteredTeam.save().then((savedTeam) => {
    if (savedTeam) {
      let emailTemplate = templateMailGen(
        "Infomaze",
        savedTeam.name,
        savedTeam.teamName,
        undefined,
        savedTeam.contactNumber
      );

      transporter
        .sendMail({
          from: process.env.MAIL_USERNAME,
          to: req.body.emailID,
          subject: "Techathlon Registration-2021",
          html: emailTemplate,
        })
        .then((response) => {
          console.log(chalk.green(response.messageId));
          res.json({ done: true, savedTeam });
        });
    } else {
      res.json({ done: false });
    }
  });
});

router.post(
  "/registerCaptureTheFlag",
  validators.validationCaptureTheFlag,
  (req, res) => {
    let data = req.body
    data.portalPassword = nanoid(10)
    if (req.body.sizeOfTeam == req.body.participants.length) {
      let newRegisteredTeam = new captureTheFlag(data);
      newRegisteredTeam.save().then((savedTeam) => {
        if (savedTeam) {
          let emailTemplate = templateMailGen(
            "Capture the Flag",
            savedTeam.participants[0].name,
            savedTeam.teamName,
            savedTeam.sizeOfTeam,
            savedTeam.contactNumber,
            savedTeam.portalPassword
          );

          transporter
            .sendMail({
              from: process.env.MAIL_USERNAME,
              to: req.body.emailID,
              subject: "Techathlon Registration-2021",
              html: emailTemplate,
            })
            .then((response) => {
              console.log(chalk.green(response.messageId));
              res.json({ done: true, savedTeam });
            });
        } else {
          res.json({ done: false });
        }
      });
    }
    else {
      res.json({ done: false, error: { details: [{ message: 'Size of team and Number of participants should be same.' }] } })
    }
  }
);

router.post("/registerVividly", validators.validationVividly, (req, res) => {
  let newRegisteredTeam = new vividly(req.body);
  newRegisteredTeam.save().then((savedTeam) => {
    if (savedTeam) {
      let emailTemplate = templateMailGen(
        "Vividly",
        savedTeam.name,
        savedTeam.teamName,
        undefined,
        savedTeam.contactNumber
      );

      transporter
        .sendMail({
          from: process.env.MAIL_USERNAME,
          to: req.body.emailID,
          subject: "Techathlon Registration-2021",
          html: emailTemplate,
        })
        .then((response) => {
          console.log(chalk.green(response.messageId));
          res.json({ done: true, savedTeam });
        });
    } else {
      res.json({ done: false });
    }
  });
});
module.exports = router;
