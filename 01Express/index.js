const express = require('express');
const app = express();
const productRouter = require('./routes/product');
const categoriesRouter = require('./routes/categories');



app.use('/product', productRouter);

app.use('/categories', categoriesRouter);

// Start the server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
