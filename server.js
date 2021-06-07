const express = require('express')
const mongoose = require('mongoose')
const chalk = require('chalk')
const cors = require('cors')
var Ddos = require('ddos')
var ddos = new Ddos({burst:10, limit: 10})
require('dotenv').config()


const app = express()
app.use(express.json())
app.use(cors())
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
let downloads = require('./routes/downloads')

// using Routes
app.use('/', registration)
app.use('/download/', downloads)

app.listen(process.env.PORT , () => {
    console.log(chalk.greenBright("Server is listening at port "+process.env.PORT))
})