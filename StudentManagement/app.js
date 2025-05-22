const express = require('express');
const app = express();
const db = require("./utils/db-connection");
const router = require("./routes/student");
const courseRouter = require('./routes/courseRoutes');
//models
require('./models');

app.use(express.json());
app.use('/students', router);
app.use('/course', courseRouter);


db.sync({force: true}).then((err) => {
    app.listen(4040, (err) => {
        console.log("server is running");
    })
}).catch((err) => {
    console.log(err);
})

