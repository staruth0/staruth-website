import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
    testimonial_id: {
        type: String,
        required:true,
    },
    image: {
        type: String,
        required:true
    },
    user_id: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
},{ timestamps: true });

const Testimonial = mongoose.model("Testimonial", testimonialSchema);
export default Testimonial;