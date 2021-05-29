const { Schema, model } = require('mongoose')

let schema = Schema({
    teamName: {
        type: String,
        required: true
    },
    sizeOfTeam: {
        type: Number,
        max: 3,
        min: 1,
        required: true
    },
    participants: {
        type: [{
            name: {
                type: String,
                required: true
            },
            college: {
                type: String,
                required: true
            },
            year: {
                type: Number,
                required: true,
                max: 4,
                min: 1
            },
            branch: {
                type: String,
                required: true
            }
        }],
        max: 3,
        min: 1
    },
    emailID: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true,
    },
    transactionId:{
        type: String,
        required: true
    }
})

let captureTheFlag = model('capturetheflagParticipants', schema)

module.exports = captureTheFlag