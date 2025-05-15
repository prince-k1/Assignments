const express = require('express');
const router = express.Router();
const booking = require('../controller/bookingContoller');

router.get('/get',booking.getEntries);
router.post('/post',booking.addEntry);

module.exports = router;