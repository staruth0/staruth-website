import express from 'express';
import { projectController } from '../controllers/index.js';

const projectRouter = express.Router();

projectRouter.post('/addProject', projectController.addProject);
projectRouter.get('/getProjects', projectController.getProjects);
projectRouter.get('/getProject/:id', projectController.getProjectById);
projectRouter.put('/updateProject/:id', projectController.updateProject);
projectRouter.delete('/deleteProject/:id', projectController.deleteProject);

export { projectRouter };
