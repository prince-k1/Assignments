const express = require('express');
const router = express.Router();

router.get('/:id', (req,res) => {
    let id = +req.params.id;
    res.send(`Fetching cart for the user with ID: ${id}`);
})

router.post('/:id', (req,res) => {
    let id = +req.params.id;
    res.send(`Adding product to cart for user with ID: ${id}`);
})




module.exports = router;