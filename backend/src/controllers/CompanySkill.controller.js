import httpStatus from "http-status";
import { createCompanySkills, getCompanySkills, updateCompanySkills, deleteCompanySkills } from "../services/CompanySkill.service.js";

const companySkillsController = {
    addCompanySkills: async (req, res) => {
        try {
            const companySkills = await createCompanySkills(req.body);
            res.status(httpStatus.CREATED).json(companySkills);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    getCompanySkills: async (req, res) => {
        try {
            const companySkills = await getCompanySkills();
            if (!companySkills) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Company skills not found" });
            }
            res.status(httpStatus.OK).json(companySkills);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    updateCompanySkills: async (req, res) => {
        try {
            const updatedCompanySkills = await updateCompanySkills(req.params.id, req.body);
            if (!updatedCompanySkills) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Company skills not found" });
            }
            res.status(httpStatus.OK).json(updatedCompanySkills);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    deleteCompanySkills: async (req, res) => {
        try {
            const deletedCompanySkills = await deleteCompanySkills(req.params.id);
            if (!deletedCompanySkills) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Company skills not found" });
            }
            res.status(httpStatus.NO_CONTENT).end();
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    }
};

export { companySkillsController };
