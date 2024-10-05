import mongoose from 'mongoose';

const aboutGallerySchema = new mongoose.Schema({
    position: {
        type: Number,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
}, { timestamps: true });

const AboutGallery = mongoose.model('AboutGallery', aboutGallerySchema);

export default AboutGallery;
