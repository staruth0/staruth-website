import httpStatus from "http-status";
import { createService, getServices,getServiceById, updateService, deleteService } from "../services/Services.service.js";

const serviceController = {
    addService: async (req, res) => {
        try {
            const service = await createService(req.body);
            res.status(httpStatus.CREATED).json(service);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    getServices: async (req, res) => {
        try {
            const services = await getServices();
            if (!services) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Services not found" });
            }
            res.status(httpStatus.OK).json(services);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    getServiceById: async (req, res) => {
        try {
            const { id } = req.params;
            const service = await getServiceById(id);
            res.status(200).json(service);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },




    updateService: async (req, res) => {
        try {
            const updatedService = await updateService(req.params.id, req.body);
            if (!updatedService) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Service not found" });
            }
            res.status(httpStatus.OK).json(updatedService);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    deleteService: async (req, res) => {
        try {
            const deletedService = await deleteService(req.params.id);
            if (!deletedService) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Service not found" });
            }
            res.status(httpStatus.NO_CONTENT).end();
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    }
};

export { serviceController };
