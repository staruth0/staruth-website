import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  shortDescription: { type: String, required: true },
  longDescription: { type: String },
  category: { type: String, required: true }
});

const Service = mongoose.model('Service', serviceSchema);

export { Service };
