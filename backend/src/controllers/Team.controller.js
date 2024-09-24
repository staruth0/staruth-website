import httpStatus from "http-status";
import { createTeamMember, getTeamMembers,getTeamMemberById, updateTeamMember, deleteTeamMember } from "../services/Team.service.js";

const teamController = {
    addTeamMember: async (req, res) => {
        try {
            const teamMember = await createTeamMember(req.body);
            res.status(httpStatus.CREATED).json(teamMember);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    getTeamMembers: async (req, res) => {
        try {
            const teamMembers = await getTeamMembers();
            if (!teamMembers) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Team members not found" });
            }
            res.status(httpStatus.OK).json(teamMembers);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },
    getTeamMemberById: async (req, res) => {
        try {
            const { id } = req.params;
            const teamMember = await getTeamMemberById(id);
            res.status(200).json(teamMember);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    updateTeamMember: async (req, res) => {
        try {
            const updatedTeamMember = await updateTeamMember(req.params.id, req.body);
            if (!updatedTeamMember) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Team member not found" });
            }
            res.status(httpStatus.OK).json(updatedTeamMember);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    deleteTeamMember: async (req, res) => {
        try {
            const deletedTeamMember = await deleteTeamMember(req.params.id);
            if (!deletedTeamMember) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Team member not found" });
            }
            res.status(httpStatus.NO_CONTENT).end();
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    }
};

export { teamController };
