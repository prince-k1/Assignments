const express = require('express');
const app = express();

app.use('/welcome', (req, res) => {
    res.send('<h1>Welcome! Guest</h1>')
})
app.listen(3000, () => {
    console.log('server is running');
})