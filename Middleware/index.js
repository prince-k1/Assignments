const express = require('express');
const app = express();
let port = 3200;

app.use((req, res, next) => {
    req.user = "Guest";
    next();
})

app.get('/welcome', (req, res, next) => {
    res.send(`Welcome, Guest!`);
})

app.listen(port, () => {
    console.log('server is running');
})