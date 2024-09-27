import express from 'express';
import { serviceController } from '../controllers/index.js';

const serviceRouter = express.Router();

serviceRouter.post('/addService', serviceController.addService);
serviceRouter.get('/getServices', serviceController.getServices);
serviceRouter.get('/getService/:id', serviceController.getServiceById);
serviceRouter.put('/updateService/:id', serviceController.updateService);
serviceRouter.delete('/deleteService/:id', serviceController.deleteService);

export { serviceRouter };
