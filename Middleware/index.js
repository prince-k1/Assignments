const express = require('express');
const app = express();
let port = 4000;

const productsRouter = require('./routes/products');
const usersRouter  = require('./routes/users');
const homeRouter = require('./routes/home');
const cartRouter = require('./routes/cart');

app.use(express.static('public'))// make a static folder 
app.use(express.json()); // to read req.body

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);
app.use('/', homeRouter);


app.listen(port, () => {
    console.log('server is running');
})