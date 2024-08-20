import { Service } from "../models/index.js";

const createService = async (body) => {
    try {
        const service = await Service.create(body);
        return service;
    } catch (error) {
        console.error(error);
        throw new Error("Error creating service");
    }
};

const getServices = async () => {
    try {
        const services = await Service.find({});
        return services;
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching services");
    }
};

const updateService = async (id, body) => {
    try {
        const updatedService = await Service.findByIdAndUpdate(id, body, { new: true });
        return updatedService;
    } catch (error) {
        console.error(error);
        throw new Error("Error updating service");
    }
};

const deleteService = async (id) => {
    try {
        const deletedService = await Service.findByIdAndDelete(id);
        return deletedService;
    } catch (error) {
        console.error(error);
        throw new Error("Error deleting service");
    }
};

export { createService, getServices, updateService, deleteService };
