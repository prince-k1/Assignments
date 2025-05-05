const express = require('express');
const app = express();
let port = 4000;

app.use((req, res, next) => {
    console.log(`${req.method} made to ${req.path}`);
    next();
})

app.get('/products', (req, res) => {
    res.send('Here is the list of all products');
})
app.post('/products', (req, res) => {
    res.send('A new product has been created');
})
app.get('/categories', (req, res) => {
    res.send('Here is the list of all categories');
})
app.post('/categories', (req, res) => {
    res.send('A new catagory has been created');
})

app.use('/', (req, res) => {
    res.end('<h1>404 Page is not found</h1>')
})

app.listen(port, () => {
    console.log('server is running');
})