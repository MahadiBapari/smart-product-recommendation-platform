const express = require('express');
const ProductController = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

// Public Routes
router.get('/', ProductController.getAllProducts);
router.get('/:id', ProductController.getProductById);

// Admin Routes (protected)
router.post('/', protect, ProductController.createProduct);
router.put('/:id', protect, ProductController.updateProduct);
router.delete('/:id', protect, ProductController.deleteProduct);

module.exports = router;
