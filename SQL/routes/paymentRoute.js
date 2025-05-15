const express = require('express');
const router = express.Router();
const payment = require('../controller/paymentController');

router.get('/get',payment.getEntries);
router.post('/post',payment.addEntry);

module.exports = router;