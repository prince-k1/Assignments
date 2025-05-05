const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome To Student and course Portal API!');
})



module.exports = router;
