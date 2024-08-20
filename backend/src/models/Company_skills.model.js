import mongoose from 'mongoose';

const skillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tools: [{ type: String }]
});

const companySkillsSchema = new mongoose.Schema({
  mainSkills: [skillSchema]
});

const CompanySkills = mongoose.model('CompanySkills', companySkillsSchema);

export { CompanySkills };
