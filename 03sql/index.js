const express = require('express');
const mysql = require('mysql2');

const app = express();
const PORT = 3000;

const db = mysql.createConnection({
    host: 'localhost',      // Database host
    user: 'root',           // Your MySQL username
    password: '675859', // Your MySQL password
    database: 'meetingmanagement'  // Your database name
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database.');
});

app.use(express.json());

app.get('/create-tables', (req, res) => {
    const usersTable = `
        CREATE TABLE IF NOT EXISTS Users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(150) UNIQUE NOT NULL
        )`;

    const busesTable = `
        CREATE TABLE IF NOT EXISTS Buses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            busNumber VARCHAR(50) NOT NULL,
            totalSeats INT NOT NULL,
            availableSeats INT NOT NULL
        )`;

    const bookingsTable = `
        CREATE TABLE IF NOT EXISTS Bookings (
            id INT AUTO_INCREMENT PRIMARY KEY,
            seatNumber INT NOT NULL,
        )`;

    const paymentsTable = `
        CREATE TABLE IF NOT EXISTS Payments (
            id INT AUTO_INCREMENT PRIMARY KEY,
            amountPaid DECIMAL(10,2) NOT NULL,
            paymentStatus ENUM('Pending', 'Completed', 'Failed') DEFAULT 'Pending',
        )`;

    db.query(usersTable, (err) => {
        if (err) return res.status(500).send(err.message);
        db.query(busesTable, (err) => {
            if (err) return res.status(500).send(err.message);
            db.query(bookingsTable, (err) => {
                if (err) return res.status(500).send(err.message);
                db.query(paymentsTable, (err) => {
                    if (err) return res.status(500).send(err.message);
                    res.send('All tables created successfully!');
                });
            });
        });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});