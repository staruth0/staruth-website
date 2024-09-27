import { Team } from "../models/index.js";

const createTeamMember = async (body) => {
    try {
        const teamMember = await Team.create(body);
        return teamMember;
    } catch (error) {
        console.error(error);
        throw new Error("Error creating team member");
    }
};

const getTeamMembers = async () => {
    try {
        const teamMembers = await Team.find({});
        return teamMembers;
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching team members");
    }
};

const getTeamMemberById = async (id) => {
    try {
        const teamMember = await Team.findById(id);
        if (!teamMember) throw new Error("Team member not found");
        return teamMember;
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching team member by ID");
    }
};

const updateTeamMember = async (id, body) => {
    try {
        const updatedTeamMember = await Team.findByIdAndUpdate(id, body, { new: true });
        return updatedTeamMember;
    } catch (error) {
        console.error(error);
        throw new Error("Error updating team member");
    }
};

const deleteTeamMember = async (id) => {
    try {
        const deletedTeamMember = await Team.findByIdAndDelete(id);
        return deletedTeamMember;
    } catch (error) {
        console.error(error);
        throw new Error("Error deleting team member");
    }
};

export { createTeamMember, getTeamMembers,getTeamMemberById, updateTeamMember, deleteTeamMember };
