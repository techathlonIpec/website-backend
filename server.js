const express = require('express')
const mongoose = require('mongoose')
const chalk = require('chalk')
var Ddos = require('ddos')
var ddos = new Ddos({burst:10, limit: 10})
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(ddos.express);

//Connecting Database-MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log(chalk.red('Error in Connecting to Database'))
    }
    else {
        console.log(chalk.green("MONGODB Connected Successfully!"));
    }
})

// Importing Routes
let registration = require('./routes/registration')

// using Routes
app.use('/', registration)

app.listen(process.env.PORT , () => {
    console.log(chalk.greenBright("Server is listening at port 3000!"))
})