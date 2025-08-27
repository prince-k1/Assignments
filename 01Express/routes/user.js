const express = require('express');
const router = express.Router();
const userController = require('../controller/userController')
// GET /users - Fetch all users
router.get('/', userController.getAllUser);

// POST /users - Add new user
router.post('/', userController.addUser);

// GET /users/:id - Fetch user by ID
router.get('/:id', userController.getUserById);

module.exports = router;
