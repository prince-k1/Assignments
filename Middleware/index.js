const express = require('express');
const app = express();
let port = 4000;

const categoriesRouter = require('./routes/categories');
const productsRouter = require('./routes/products');
const booksRouter = require('./routes/books');


app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);
app.use('/books', booksRouter);

app.listen(port, () => {
    console.log('server is running');
})