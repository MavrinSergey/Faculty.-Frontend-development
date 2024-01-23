const Joi = require("joi")

const schema = Joi.object({
    firstName: Joi.string()
        .min(3)
        .max(30)
        .required(),
    lastName: Joi.string()
        .min(3)
        .max(30)
        .required(),
    age: Joi.number()
        .integer()
        .min(0)
        .max(120)
        .required(),
    city: Joi.string()
        .min(1)
        .max(30),
})

function validateUsers(user, res) {
    const result = schema.validate(user);
    if (result.error) {
        return res.status(404).send({error: result.error.details})
    }
}

module.exports = { validateUsers };