const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const schema = Joi.object({
        email: Joi.string().required().email(),
        password: Joi.string().required()
    });
    return schema.validate(data);
};

module.exports.registerValidation = registerValidation;