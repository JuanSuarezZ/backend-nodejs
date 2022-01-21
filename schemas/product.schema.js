const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();
const description = Joi.string().max(50);
const categoryId = Joi.number().integer();
const price_max = Joi.number().integer();
const price_min = Joi.number().integer();

const limit = Joi.number().integer();
const offset= Joi.number().integer();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
  description: description.required(),
  categoryId: categoryId.required()
});

const updateProductSchema = Joi.object({
  name,
  price,
  image,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

const queryProductSchema = Joi.object({
  limit,
  offset,
  price,
  price_min,
  price_max,
});


module.exports = { queryProductSchema, createProductSchema, updateProductSchema, getProductSchema }
