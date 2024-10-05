import mongoose from 'mongoose';

// Define Project Numbers as a dynamic key-value schema
const projectNumberSchema = new mongoose.Schema({
  metric: { type: String, required: true }, // E.g., "Conversion Rate", "Successful Payments"
  value: { type: String, required: true }   // E.g., "120%", "98%"
});

const projectSchema = new mongoose.Schema({
  heroImages: [{ type: String }],
  title: { type: String, required: true },
  category: [{ type: String, required: true }],
  shortDescription: { type: String, required: true },
  longDescription: { type: String },
  initialRequest: { type: String },
  analysis: { type: String },
  findings: [{ type: String }],
  solutionDevelop: {
    description: { type: String, required: true },
    solutions:[{type:String}]
  },
  projectNumbers: [projectNumberSchema],
  review: { type: String },
  video: { type: String },
});

const Project = mongoose.model('Project', projectSchema);

export { Project };
