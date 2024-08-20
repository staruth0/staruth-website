import mongoose from 'mongoose';

const socialMediaLinkSchema = new mongoose.Schema({
  appName: { type: String, required: true },
  link: { type: String, required: true }
});

const achievementSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String }
});

const qualificationSchema = new mongoose.Schema({
  certificateName: { type: String, required: true },
  description: { type: String },
  issuedBy: { type: String }
});

const expertiseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tools: [{ type: String }]
});

const teamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String },
  role: { type: String, required: true },
  socialMediaLinks: [socialMediaLinkSchema],
  achievements: [achievementSchema],
  interests: [{ type: String }],
  qualifications: [qualificationSchema],
  expertise: [expertiseSchema]
});

const Team = mongoose.model('Team', teamSchema);

export { Team };
