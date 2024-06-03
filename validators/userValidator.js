console.log("userValidator.js top")
const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = Joi.object({
    email: Joi.string().email().required(),
    name: Joi.string().required(),
    age: Joi.number().required(),
    city: Joi.string().required(),
    zipCode: Joi.string().required()
});

const userIdSchema = Joi.string().custom((value, helpers) => {
    if (!mongoose.Types.ObjectId.isValid(value)) {
        return helpers.message("Invalid user ID");
    }
    return value;
}, 'ObjectId validation');

exports.validateUser = async (user) => {
    try {
        await userSchema.validateAsync(user);
    } catch (error) {
        throw new Error(error.details[0].message);
    }
};

exports.validateUserId = async (userId) => {
    try {
        await userIdSchema.validateAsync(userId);
    } catch (error) {
        throw new Error(error.details[0].message);
    }
};
console.log("userValidator.js bottom")