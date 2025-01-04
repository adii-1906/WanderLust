const Joi = require('joi');

// Server side validation for listing
const listingSchema = Joi.object({
    listing: Joi.object({
      title: Joi.string().required(),
      description: Joi.string().required(),
      price: Joi.number().required().min(0),
      location: Joi.string().required(),
      country: Joi.string().required(),
      image: Joi.object({
        url: Joi.string().uri().required(), // Validate the URL
        filename: Joi.string().optional(), // Allow an optional filename
      }).required(), // Ensure `image` is required
    }).required(),
  });
  
  module.exports = { listingSchema };

// Server side validation for review
module.exports.reviewSchema = Joi.object({
    review: Joi.object({
        rating: Joi.number().required().min(1).max(5),
        comment: Joi.string().required(),
    }).required(),
});