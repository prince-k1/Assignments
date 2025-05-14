const express = require('express');
const app = express();
const db = require("./utils/db-connection");
const router = require("./routes/student");
app.use(express.json());
app.use('/students', router);

app.listen(4040, (err) => {
    console.log("server is running");
})