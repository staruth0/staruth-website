import Joi from "joi";
/**
 * Validation schema for creating testimonial
 */

const createTestimonialValidation = {
  body: Joi.object({
       testimonial_id:Joi.string().required(),
    image: Joi.string().required(),
    user_id: Joi.string().required(),
    text:Joi.string().required(),
  }),
};

/**
 * Validation schema for deleting testimonial
 */
const deleteTestimonialValidation = {
  params: Joi.object().keys({
    testimonial_id: Joi.string().required(),
  }),
};


export {createTestimonialValidation,deleteTestimonialValidation};
