const express = require('express');
const app = express();
const productRouter = require('./routes/product');
const categoriesRouter = require('./routes/categories');
const bookRouter = require('./routes/books');


app.use('/product', productRouter);

app.use('/categories', categoriesRouter);
app.use('/books', bookRouter);

// Start the server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
