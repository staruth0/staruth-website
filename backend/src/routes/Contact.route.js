import express from 'express';
import { contactController } from '../controllers/index.js';

const contactRouter = express.Router();

contactRouter.post('/addContact', contactController.addContact);  
contactRouter.get('/getcontacts', contactController.getContacts); 
contactRouter.put('/updateContact/:id', contactController.updateContact);  
contactRouter.delete('/deleteContact/:id', contactController.deleteContact);

export { contactRouter };
