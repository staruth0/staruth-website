import express from 'express';
import aboutGalleryController from '../controllers/aboutGallery.controller.js';

const router = express.Router();

router.get('/getAll', aboutGalleryController.getAllImages);
router.post('/add', aboutGalleryController.addImage);
router.delete('/delete/:id', aboutGalleryController.deleteImage);
router.put('/update/:id', aboutGalleryController.updateImage);

export default router;
