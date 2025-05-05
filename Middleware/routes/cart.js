const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
router.get('/:id', cartController.getCart)

router.post('/:id', cartController.postCart);




module.exports = router;