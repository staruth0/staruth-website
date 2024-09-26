import httpStatus from "http-status";
import { createTestimonial, getTestimonials, updateTestimonial, deleteTestimonial } from "../services/Testimonial.service.js";

const testimonialController = {
    addTestimonial: async (req, res) => {
        try {
            const testimonial = await createTestimonial(req.body);
            res.status(httpStatus.CREATED).json(testimonial);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    getTestimonials: async (req, res) => {
        try {
            const testimonials = await getTestimonials();
            if (!testimonials) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Testimonials not found" });
            }
            res.status(httpStatus.OK).json(testimonials);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    updateTestimonial: async (req, res) => {
        try {
            const updatedTestimonial = await updateTestimonial(req.params.id, req.body);
            if (!updatedTestimonial) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Testimonial not found" });
            }
            res.status(httpStatus.OK).json(updatedTestimonial);
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    },

    deleteTestimonial: async (req, res) => {
        try {
            const deletedTestimonial = await deleteTestimonial(req.params.id);
            if (!deletedTestimonial) {
                return res.status(httpStatus.NOT_FOUND).json({ message: "Testimonial not found" });
            }
            res.status(httpStatus.OK).end();
        } catch (error) {
            console.error(error);
            res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ message: "There was an error in the server" });
        }
    }
};

export { testimonialController };
