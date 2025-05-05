const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Here is the list of all categories');
})

router.post('/', (req, res) => {
    res.send('A new catagory has been created');
})

module.exports = router;
