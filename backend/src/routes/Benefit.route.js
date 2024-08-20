import express from 'express';
import { benefitController } from '../controllers/index.js';


const benefitRouter = express.Router();

benefitRouter.post('/addbenefit', benefitController.addBenefit);  
benefitRouter.get('/getbenefits', benefitController.getBenefits);  
benefitRouter.put('/updatebenefit/:id', benefitController.updateBenefit);  
benefitRouter.delete('/deletebenefit/:id', benefitController.deleteBenefit);  


export { benefitRouter };
