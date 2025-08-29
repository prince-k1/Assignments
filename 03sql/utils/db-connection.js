const mysql = require('mysql2');

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

    const createQuery = `create table IF NOT EXISTS Students(
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(20),
            email VARCHAR(30)  
    )`;

    db.execute(createQuery, (err) => {
        if(err){
            console.log(err);
            db.end();
            return;
        }
        console.log(`Student table is created`);
    })
});

module.exports = db;