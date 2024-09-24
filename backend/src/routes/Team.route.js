import express from 'express';
import { teamController } from '../controllers/index.js';

const teamRouter = express.Router();

teamRouter.post('/addTeamMember', teamController.addTeamMember);
teamRouter.get('/getTeamMembers', teamController.getTeamMembers);
teamRouter.get('/getTeamMember/:id', teamController.getTeamMemberById);
teamRouter.put('/updateTeamMember/:id', teamController.updateTeamMember);
teamRouter.delete('/deleteTeamMember/:id', teamController.deleteTeamMember);

export { teamRouter };
