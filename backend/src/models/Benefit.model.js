import mongoose from 'mongoose';

const benefitSchema = new mongoose.Schema({
  value: { type: String, required: true },
  description: { type: String, required: true }
});

const Benefit = mongoose.model('Benefit', benefitSchema);

export { Benefit };
