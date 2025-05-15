const {Sequelize} = require('sequelize');
const sequelize = new Sequelize("studentdb", "root", "675859", {
    host: "localhost",
    dialect: "mysql"
})
(async () => {
    try{
        await sequelize.authenticate();
        console.log("connection creted");
    }catch(error){
        console.log(error);
    }
})();

module.exports = sequelize;

// const mysql = require('mysql2');
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '675859',
//     database:'testdb'
// })

// connection.connect((err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("connection has been created");

//     const userTable = `create table IF NOT EXISTS users(
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(20),
//         email VARCHAR(20)    
//     )`;

//     const busesTable = `create table IF NOT EXISTS bus(
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         busName VARCHAR(20)
//     )`
   
//     connection.execute(userTable, (err) => {
//         if(err){
//             console.log(err);
//             connection.end();
//             return;
//         }
//         console.log("Table is created");
//     })
//     connection.execute(busesTable, (err) => {
//         if(err){
//             console.log(err);
//             connection.end();
//             return;
//         }
//         console.log("bus table is created");
//     })
    
// })

// module.exports = connection;