import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema({
  image: { type: String },
  title: { type: String, required: true },
  message: { type: String, required: true }
});

const featureSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true }
});

const challengeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  solution: { type: String },
  solutionDescription: { type: String }
});

const projectSchema = new mongoose.Schema({
  heroImage: { type: String },
  title: { type: String, required: true },
  category: { type: String, required: true },
  supTitle: { type: String },
  shortDescription: { type: String, required: true },
  longDescription: { type: String },
  gallery: [{ type: String }],
  reviews: [reviewSchema],
  video: { type: String },
  features: [featureSchema],
  challenges: [challengeSchema]
});

const Project = mongoose.model('Project', projectSchema);

export { Project };
