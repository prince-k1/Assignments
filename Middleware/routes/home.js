const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to an Econmerce Startup API!');
})



module.exports = router;
