const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '675859',
    database:'testdb'
})

connection.connect((err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("connection has been created");
})

app.get('/', (req, res) => {
    res.send("helo world")
})

app.listen(3000, (err) => {
    console.log("server is running")
})