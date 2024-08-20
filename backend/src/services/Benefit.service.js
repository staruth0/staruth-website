import { Benefit } from "../models/index.js";

const createBenefit = async (body) => {
    try {
        const benefits = await Benefit.create(body);
        return benefits;
    } catch (error) {
        console.error(error);
        throw new Error("Error creating benefit");
    }
};

const getBenefits = async () => {
    try {
        const benefit = await Benefit.find({});
        return benefit;
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching benefit");
    }
};

const updateBenefit = async (id, body) => {
    try {
        const updatedBenefit = await Benefit.findByIdAndUpdate(id, body, { new: true });
        return updatedBenefit;
    } catch (error) {
        console.error(error);
        throw new Error("Error updating benefit");
    }
};

const deleteBenefit = async (id) => {
    try {
        const deletedBenefit = await Benefit.findByIdAndDelete(id);
        return deletedBenefit;
    } catch (error) {
        console.error(error);
        throw new Error("Error deleting benefit");
    }
};

export { createBenefit, getBenefits, updateBenefit, deleteBenefit };
