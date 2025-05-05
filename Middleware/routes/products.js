const express = require('express');
const router = express.Router();
const controller = require('../controllers/productController');

router.get('/', controller.getProduct)
router.get('/:id', controller.getProductById)

router.post('/', controller.postProduct);

module.exports = router;