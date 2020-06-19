// packages
const Joi              = require('@hapi/joi');
// consts
const pattern          = new RegExp(new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,32})"));
const userName         = Joi.string().min(3).max(30);
const userPassword     = Joi.string().regex(pattern).min(8).max(32);
const id               = Joi.number().min(0);

const idSchema         = Joi.object({
    id: id.required()
})
const userSchemaCreate = Joi.object({
    userName: userName.required(),
    userPassword: userPassword.required()
})

const userSchemaUpdate = Joi.object({
    userName,
    userPassword
});

module.exports = {
    userSchemaCreate,
    userSchemaUpdate,
    idSchema}