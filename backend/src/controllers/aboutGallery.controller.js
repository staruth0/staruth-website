import aboutGalleryService from '../services/aboutGallery.service.js';

class AboutGalleryController {
    async getAllImages(req, res) {
        try {
            const images = await aboutGalleryService.getAllImages();
            res.status(200).json(images);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching images', error });
        }
    }

    async addImage(req, res) {
        try {
            const imageData = req.body;
            const newImage = await aboutGalleryService.addImage(imageData);
            res.status(201).json(newImage);
        } catch (error) {
            res.status(500).json({ message: 'Error adding image', error });
        }
    }

    async deleteImage(req, res) {
        try {
            const imageId = req.params.id;
            await aboutGalleryService.deleteImage(imageId);
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: 'Error deleting image', error });
        }
    }

    async updateImage(req, res) {
        try {
            const imageId = req.params.id;
            const updatedData = req.body;
            const updatedImage = await aboutGalleryService.updateImage(imageId, updatedData);
            res.status(200).json(updatedImage);
        } catch (error) {
            res.status(500).json({ message: 'Error updating image', error });
        }
    }
}

export default new AboutGalleryController();
