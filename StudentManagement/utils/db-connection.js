const mysql = require("mysql2");


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '675859',
    database:'studentdb'
});

connection.connect((err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log("connection created");

    const studentTable = `create table IF NOT EXISTS students(
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(20),
        age INT
    )`;

    connection.execute(studentTable, (err) => {
        if(err){
            console.log(err.message);
            connection.end();
            return;
        }
        console.log("studeny table is created");
    })
})

module.exports = connection;