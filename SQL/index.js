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

    const userTable = `create table users(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(20)    
    )`;
    const busesTable = `create table buses(
        id INT AUTO_INCREMENT PRIMARY KEY,
        busNumber INT,
        totalSeats INT,
        availableSeats INT
    )`
    const bookingTable = `create table booking(
        id INT AUTO_INCREMENT PRIMARY KEY,
        seatNumber INT
    )`
    const paymentTable = `create table payment(
        id INT AUTO_INCREMENT PRIMARY KEY,
        amountPaid INT,
        paymentStatus INT
    )`
    

    connection.execute(userTable, (err) => {
        if(err){
            console.log(err);
            connection.end();
        }
        console.log("Table is created");
    })
    connection.execute(busesTable, (err) => {
        if(err){
            console.log(err);
            connection.end();
        }
        console.log("bus Table is created");
    })
    connection.execute(bookingTable, (err) => {
        if(err){
            console.log(err);
            connection.end();
        }
        console.log("booking is created");
    })
    connection.execute(paymentTable, (err) => {
        if(err){
            console.log(err);
            connection.end();
        }
        console.log("payment is created");
    })
})

app.get('/', (req, res) => {
    res.send("helo world")
})

app.listen(3000, (err) => {
    console.log("server is running")
})