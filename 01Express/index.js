const express = require('express');
const app = express();
const productRouter = require('./routes/product');
const categoriesRouter = require('./routes/categories');
const bookRouter = require('./routes/books');
const studentRoutes = require('./routes/students');
const courseRoutes = require('./routes/courses');


app.use(express.json());
app.get('/', (req, res) => {
    res.send('Welcome to the API!');
});

app.use('/students', studentRoutes);
app.use('/courses', courseRoutes);

app.use('/product', productRouter);

app.use('/categories', categoriesRouter);
app.use('/books', bookRouter);

app.use((req, res) => {
    res.status(404).send('Page not found');
});

// Start the server
app.listen(4000, () => {
    console.log('Server is running on port 4000');
});
