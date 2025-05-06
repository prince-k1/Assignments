const express = require('express');
const db = require('./utils/db-connection');
const app = express();
const userRoutes = require('./routes/usersRoutes');

app.use(express.json());



app.use("/users", userRoutes);

app.listen(3000, (err) => {
    console.log("server is running")
})