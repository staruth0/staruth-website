import mongoose from 'mongoose';

const testimonialSchema = new mongoose.Schema({
  image: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  message: { type: String, required: true }
});

const Testimonial = mongoose.model('Testimonial', testimonialSchema);

export { Testimonial };
