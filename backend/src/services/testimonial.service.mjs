import Testimonial from "../models/testimonial.model.mjs";

/**
 * Create a new testimonial
 * @param {object} testimonialData 
 * @returns {Promise<object>} 
 */
const createTestimonial = async (testimonialData) => {
  try {
    const testimonial = await Testimonial.create(testimonialData);
    return testimonial;
  } catch (error) {
    console.error(error);
    throw new Error("Error creating testimonial");
  }
};

/**
 * Get all testimonials
 * @returns {Promise<Array>} 
 */
const getAllTestimonials = async () => {
  try {
    const allTestimonials = await Testimonial.find({});
    return allTestimonials;
  } catch (error) {
    console.error(error);
    throw new Error("Error fetching all testimonials");
  }
};

/**
 * Delete a testimonial by its ID
 * @param {string} testimonialId 
 * @returns {Promise<object>} 
 */
const deleteTestimonial = async (testimonialId) => {
  try {
    const result = await Testimonial.findByIdAndDelete(testimonialId)
    if (result) {
      return result;
    } else {
      throw new Error(`Could not find testimonial with ID: ${testimonialId}`);
    }
  } catch (error) {
    console.error(error);
    throw new Error("Error deleting testimonial");
  }
};

export { createTestimonial, getAllTestimonials, deleteTestimonial };