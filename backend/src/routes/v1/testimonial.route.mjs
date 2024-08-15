import express from "express";
import testimonialController from "../../controllers/testimonial.controller.mjs";
import validate from '../../middlewares/validate.mjs';
import {createTestimonialValidation,deleteTestimonialValidation} from '../../validations/testimonial.validation.mjs';

const testimonialRouter = express.Router();

testimonialRouter.post("/create", validate(createTestimonialValidation), testimonialController.createTestimonial);
testimonialRouter.get("/fetchall", testimonialController.getAllTestimonials);
testimonialRouter.delete("/delete/:testimonial_id", validate(deleteTestimonialValidation), testimonialController.deleteTestimonial);

export default testimonialRouter;