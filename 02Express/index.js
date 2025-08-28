const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Serve the HTML form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Handle POST request
app.post('/add-product', (req, res) => {
    const { productName } = req.body;
    console.log('Product received:', productName);
    res.json({ message: `Product "${productName}" added successfully!` });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
