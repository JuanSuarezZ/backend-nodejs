const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(15);
const image = Joi.string().uri();
const description = Joi.string().min(10);

const createCategorySchema = Joi.object({
  name: name.required(),
  image: image.required(),
  description: description.required()
});

const updateCategorySchema = Joi.object({
  name: name,
  image: image,
  description: description.required()
});

const getCategorySchema = Joi.object({
  id: id.required(),
});

module.exports = { createCategorySchema, updateCategorySchema, getCategorySchema }
