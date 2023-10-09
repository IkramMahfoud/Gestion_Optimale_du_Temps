const Joi = require('joi');

// Validation schema for creating an article
const createArticleSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  picture: Joi.string(),
  publishing_date: Joi.date(),
});

// Validation schema for updating an article
const updateArticleSchema = Joi.object({
  title: Joi.string(),
  content: Joi.string(),
  picture: Joi.string(),
  publishing_date: Joi.date(),
});

module.exports = {
  createArticleSchema,
  updateArticleSchema,
};