const express = require('express');
const app = express();
let port = 4000;

const categoriesRouter = require('./routes/categories');
const productsRouter = require('./routes/products');



app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);

app.listen(port, () => {
    console.log('server is running');
})