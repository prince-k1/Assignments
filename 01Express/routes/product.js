const express = require('express');
const router = express.Router();

// GET /products - Fetch all products
router.get('/', (req, res) => {
    res.send('Fetching all products');
});

// POST /products - Add new product
router.post('/', (req, res) => {
    res.send('Adding a new product');
});

// GET /products/:id - Fetch product by ID
router.get('/:id', (req, res) => {
    res.send(`Fetching product with ID: ${req.params.id}`);
});

module.exports = router;
