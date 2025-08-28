const express = require('express');
const app = express();
const path = require('path');
// const port = 3000;

app.get('/api/product', (req,res) => {
    res.sendFile(path.join(__dirname, 'view', 'product.html'));
})

app.get('/', (req, res) => {
    res.send('<h1>Welcome to the Product API!</h1>');
});


app.listen(3000, () => {
    console.log(`Server running at http://localhost:3000`);
});