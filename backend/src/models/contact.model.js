import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  country: { type: String, required: true },
  town: { type: String, required: true },
  actualLocation: { type: String, required: true }
});

const Contact = mongoose.model('Contact', contactSchema);

export { Contact };
