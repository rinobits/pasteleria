const Joi = require('@hapi/joi');

const name              = Joi.string().min(2).max(15);
const phone             = Joi.string().min(8).max(15);
const tipoMasa          = Joi.string().min(2).max(15);
const saborMasa         = Joi.string().min(2).max(15);
const tamano            = Joi.string().min(2).max(15);
const cobertura         = Joi.string().min(2).max(15);
const description       = Joi.string().allow("");
const message           = Joi.string().allow("");
const value             = Joi.number().min(1).max(1000000);
const deposit           = Joi.number().min(1).max(999999).allow("");
const horaEntrega       = Joi.string().min(2).max(5);
const id                = Joi.number().min(0);

const idSchema          = Joi.object({
    id: id.required()
})
const orderSchemaCreate = Joi.object({
    name:      name.required(),
    phone:     phone.required(),
    tipoMasa:  tipoMasa.required(),
    saborMasa: saborMasa.required(),
    cobertura: cobertura.required(),
    tamano:    tamano.required(),
    description,
    message,
    value:     value.required(),
    deposit,
    horaEntrega: horaEntrega.required()
});

const orderSchemaUpdate = Joi.object({
    name,
    phone,
    tipoMasa,
    saborMasa,
    cobertura,
    tamano,
    description,
    message,
    value,
    deposit,
    horaEntrega
});

module.exports = {
    orderSchemaCreate,
    orderSchemaUpdate,
    idSchema
}