import httpStatus from "http-status";
import { createBenefit, getBenefits, updateBenefit, deleteBenefit } from "../services/index.js";

const benefitController = {
    addBenefit: async (req, res) => {
        try {
            const benefits = await createBenefit(req.body); 
            res.status(httpStatus.CREATED).json(benefits);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    getBenefits: async (req, res) => {
        try {
            const benefit = await getBenefits();
            if (!benefit) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Benefits not found" });
            }
            res.status(httpStatus.OK).json(benefit);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    updateBenefit: async (req, res) => {
        try {
            const updatedBenefit = await updateBenefit(req.params.id, req.body);
            if (!updatedBenefit) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Benefit not found" });
            }
            res.status(httpStatus.OK).json(updatedBenefit);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    deleteBenefit: async (req, res) => {
        try {
            const deletedBenefit = await deleteBenefit(req.params.id);
            if (!deletedBenefit) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Benefit not found" });
            }
            res.status(httpStatus.OK).end(); 
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    }
};

export { benefitController };
