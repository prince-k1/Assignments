const express = require('express');
const router = express.Router();
const controller = require('../controller/studentController');

router.post('/', controller.addEntries);
router.put('/:id', controller.updateEntry);
router.delete('/:id', controller.deleteEntry);
module.exports = router;