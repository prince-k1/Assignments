const express = require('express');
const userController = require('../controller/usersController');
const router = express.Router();


router.post("/add", userController.addEntries);
router.put("/update/:id", userController.updateEntry);
router.delete("/delete/:id",userController.deleteEntry);

module.exports = router;