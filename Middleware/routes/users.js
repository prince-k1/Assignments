const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');

router.get('/', userController.getUser);

router.get('/:id', userController.getUserById);
router.post('/', userController.postUser);



module.exports = router;