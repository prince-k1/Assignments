const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController');

// GET /cart/:userId - Fetch cart for user
router.get('/:userId', cartController.getCartForUser);

// POST /cart/:userId - Add product to user's cart
router.post('/:userId', cartController.addProductToCart);

module.exports = router;
