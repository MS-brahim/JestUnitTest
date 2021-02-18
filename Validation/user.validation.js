const Joi = require('@hapi/joi');

const postUser = data =>{
    const schemaUser = Joi.object({
        username: Joi.string()
            .min(6)
            .required(),
        email: Joi.string()
            .required()
            .email(),
        password: Joi.string()
            .min(3)
            .required()
    })

    return schemaUser.validate(data)
}

module.exports.postUser = postUser;