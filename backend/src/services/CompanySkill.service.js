import { CompanySkills } from "../models/index.js";

const createCompanySkills = async (body) => {
    try {
        const companySkills = await CompanySkills.create(body);
        return companySkills;
    } catch (error) {
        console.error(error);
        throw new Error("Error creating company skills");
    }
};

const getCompanySkills = async () => {
    try {
        const companySkills = await CompanySkills.find({});
        return companySkills;
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching company skills");
    }
};

const updateCompanySkills = async (id, body) => {
    try {
        const updatedCompanySkills = await CompanySkills.findByIdAndUpdate(id, body, { new: true });
        return updatedCompanySkills;
    } catch (error) {
        console.error(error);
        throw new Error("Error updating company skills");
    }
};

const deleteCompanySkills = async (id) => {
    try {
        const deletedCompanySkills = await CompanySkills.findByIdAndDelete(id);
        return deletedCompanySkills;
    } catch (error) {
        console.error(error);
        throw new Error("Error deleting company skills");
    }
};

export { createCompanySkills, getCompanySkills, updateCompanySkills, deleteCompanySkills };
