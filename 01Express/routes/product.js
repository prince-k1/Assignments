const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

// GET /products - Fetch all products
router.get('/', productController.getProduct);

// POST /products - Add new product
router.post('/', productController.postProduct);

// GET /products/:id - Fetch product by ID
router.get('/:id', productController.getProductById);

module.exports = router;
