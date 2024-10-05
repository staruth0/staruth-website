import AboutGallery from '../models/aboutGallery.model.js';

class AboutGalleryService {
    async getAllImages() {
        return await AboutGallery.find().sort({ position: 1 });
    }

    async addImage(imageData) {
        if (!imageData) {
            throw new Error('please add image data')
        }
        const image = new AboutGallery(imageData);
        return await image.save();
    }

    async deleteImage(imageId) {
        return await AboutGallery.findByIdAndDelete(imageId);
    }

    async updateImage(imageId, updatedData) {
        return await AboutGallery.findByIdAndUpdate(imageId, updatedData, { new: true });
    }
}

export default new AboutGalleryService();
