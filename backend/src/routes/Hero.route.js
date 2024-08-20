import express from 'express';
import { heroController } from '../controllers/index.js';

const heroRouter = express.Router();

heroRouter.post('/addHero', heroController.addHero);
heroRouter.get('/getHeroes', heroController.getHeroes);
heroRouter.put('/updateHero/:id', heroController.updateHero);
heroRouter.delete('/deleteHero/:id', heroController.deleteHero);

export { heroRouter };
