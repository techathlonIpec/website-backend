const joi = require('joi')

function validationHackathon(req,res,next) {
    const participantsJoiSchema = joi.object(
        {
            teamName: joi.string().required(),
            sizeOfTeam: joi.number().max(4).min(1).required(),
            participants: [
                joi.object({
                    name: joi.string().required(),
                    college: joi.string().required(),
                    year: joi.number().max(4).min(1).required(),
                    branch: joi.string().required(),
                    githubID: joi.string().required()
                })
            ],
            emailID: joi.email().required(),
            contactNumber: joi.string().min(10).max(10).required()
        }
    )
    const validation = participantsJoiSchema.validate(req.body)
    if(validation.error){
        res.json({done:false, error: validation.error})
    }
    else{
        next()
    }
}

module.exports = {validationHackathon}