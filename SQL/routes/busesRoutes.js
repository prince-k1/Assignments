const express = require('express');
const router = express.Router();
const busesController = require('../controller/busesController');

router.get('/get',busesController.getEntries);
router.post('/post',busesController.addEntry);

module.exports = router;