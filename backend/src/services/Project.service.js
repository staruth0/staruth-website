import { Project } from "../models/index.js";

const createProject = async (body) => {
    try {
        const project = await Project.create(body);
        return project;
    } catch (error) {
        console.error(error);
        throw new Error("Error creating project");
    }
};

const getProjects = async () => {
    try {
        const projects = await Project.find({});
        return projects;
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching projects");
    }
};

const getProjectById = async (id) => {
    try {
        const project = await Project.findById(id);
        if (!project) throw new Error("Project not found");
        return project;
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching project by ID");
    }
};

const updateProject = async (id, body) => {
    try {
        const updatedProject = await Project.findByIdAndUpdate(id, body, { new: true });
        return updatedProject;
    } catch (error) {
        console.error(error);
        throw new Error("Error updating project");
    }
};

const deleteProject = async (id) => {
    try {
        const deletedProject = await Project.findByIdAndDelete(id);
        return deletedProject;
    } catch (error) {
        console.error(error);
        throw new Error("Error deleting project");
    }
};



export { createProject, getProjects,getProjectById, updateProject, deleteProject };
