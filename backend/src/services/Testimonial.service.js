import { Testimonial } from "../models/index.js";

const createTestimonial = async (body) => {
    try {
        const testimonial = await Testimonial.create(body);
        return testimonial;
    } catch (error) {
        console.error(error);
        throw new Error("Error creating testimonial");
    }
};

const getTestimonials = async () => {
    try {
        const testimonials = await Testimonial.find({});
        return testimonials;
    } catch (error) {
        console.error(error);
        throw new Error("Error fetching testimonials");
    }
};

const updateTestimonial = async (id, body) => {
    try {
        const updatedTestimonial = await Testimonial.findByIdAndUpdate(id, body, { new: true });
        return updatedTestimonial;
    } catch (error) {
        console.error(error);
        throw new Error("Error updating testimonial");
    }
};

const deleteTestimonial = async (id) => {
    try {
        const deletedTestimonial = await Testimonial.findByIdAndDelete(id);
        return deletedTestimonial;
    } catch (error) {
        console.error(error);
        throw new Error("Error deleting testimonial");
    }
};

export { createTestimonial, getTestimonials, updateTestimonial, deleteTestimonial };
