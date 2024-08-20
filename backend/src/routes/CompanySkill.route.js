import express from 'express';
import { companySkillsController } from '../controllers/index.js';

const companySkillsRouter = express.Router();

companySkillsRouter.post('/addCompanySkills', companySkillsController.addCompanySkills);  
companySkillsRouter.get('/getCompanySkills', companySkillsController.getCompanySkills);  
companySkillsRouter.put('/updateCompanySkills/:id', companySkillsController.updateCompanySkills);  
companySkillsRouter.delete('/deleteCompanySkills/:id', companySkillsController.deleteCompanySkills);  

export { companySkillsRouter };
