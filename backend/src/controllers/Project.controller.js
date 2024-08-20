import httpStatus from "http-status";
import { createProject, getProjects, updateProject, deleteProject } from "../services/Project.service.js";

const projectController = {
    addProject: async (req, res) => {
        try {
            const project = await createProject(req.body);
            res.status(httpStatus.CREATED).json(project);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    getProjects: async (req, res) => {
        try {
            const projects = await getProjects();
            if (!projects) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Projects not found" });
            }
            res.status(httpStatus.OK).json(projects);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    updateProject: async (req, res) => {
        try {
            const updatedProject = await updateProject(req.params.id, req.body);
            if (!updatedProject) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Project not found" });
            }
            res.status(httpStatus.OK).json(updatedProject);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    deleteProject: async (req, res) => {
        try {
            const deletedProject = await deleteProject(req.params.id);
            if (!deletedProject) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Project not found" });
            }
            res.status(httpStatus.NO_CONTENT).end();
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    }
};

export { projectController };
