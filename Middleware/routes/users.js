const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.send('Fetch all users');
})

router.get('/:id', (req,res) => {
    let id = +req.params.id;
    res.send(`Fetching user with ID: ${id}`);
})
router.post('/', (req,res) => {
    res.send('Add a new user');
})



module.exports = router;