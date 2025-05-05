const express = require('express');
const app = express();
let port = 4000;

const categoriesRouter = require('./routes/categories');
const productsRouter = require('./routes/products');
const booksRouter = require('./routes/books');
const home = require('./routes/home');
const course = require('./routes/course');
const students = require('./routes/students');


app.use('/categories', categoriesRouter);
app.use('/products', productsRouter);
app.use('/books', booksRouter);
app.use('/', home);
app.use('/students', students);
app.use('/courses', course);

app.listen(port, () => {
    console.log('server is running');
})