import express from 'express';
import { testimonialController } from '../controllers/index.js';

const testimonialRouter = express.Router();

testimonialRouter.post('/addTestimonial', testimonialController.addTestimonial);
testimonialRouter.get('/getTestimonials', testimonialController.getTestimonials);
testimonialRouter.put('/updateTestimonial/:id', testimonialController.updateTestimonial);
testimonialRouter.delete('/deleteTestimonial/:id', testimonialController.deleteTestimonial);

export { testimonialRouter };
