const Joi = require('joi');

const id = Joi.number().integer();
const userId = Joi.number().integer();
const name = Joi.string().max(30);
const lastname = Joi.string();
const phone = Joi.string().min(6).max(8);
// const email = Joi.string().email();
// const password =  Joi.string();

const createCustomerSchema = Joi.object({
  // user_id: user_id,
  // id: id.required(),
  name: name.required(),
  lastName: lastname.required(),
  phone: phone.required(),
  userId: userId.required()
});

const updateCustomerSchema = Joi.object({
  name: name,
  lastname: lastname,
  phone: phone,
  userId: userId
});

const getCustomerSchema = Joi.object({
  id: id.required(),
});

module.exports = { createCustomerSchema, updateCustomerSchema, getCustomerSchema }
