import mongoose from 'mongoose';

const heroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  images: [{ type: String }]
});

const Hero = mongoose.model('Hero', heroSchema);

export { Hero };
