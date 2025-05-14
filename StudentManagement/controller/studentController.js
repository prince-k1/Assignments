
const db = require('../utils/db-connection');

const addStudent = (req, res) => {
    const {name, email, age} = req.body;
    const insertQuery = `INSERT INTO students(name, email, age) VALUES (?,?,?)`;
    db.execute(insertQuery, [name, email, age], (err) => {
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log("Student Inserted");
        res.status(200).send(`Student with name ${name} added`);
    })
    
}

const getStudents = (req, res) => {
    const getQuery = `SELECT * FROM students`;

    db.execute(getQuery, (err, result) => {
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        res.status(200).json(result);
    })
}

const getStudentById = (req,res) => {
    const {id} = req.params;
    const getQuery = `SELECT * FROM students WHERE id = ?`;

    db.execute(getQuery, [id], (err,result) => {
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
       res.status(200).json(result[0]);
    })

}

const updateStudent = (req, res) => {
    const {id} = req.params;
    const {name, email, age} = req.body;
    const updateQuery = 'UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?';

    db.execute(updateQuery, [name, email, age, id], (err, result) => {
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }

        if(result.affectedRows === 0){
            res.status(404).send("student not found");
            return;
        }
        res.status(200).send("user has been updated");
    })
}

const deleteStudent = (req, res) => {
    const {id}  = req.params;
    const deleteQuery = `DELETE FROM students where id = ?`;

    db.execute(deleteQuery, [id], (err,result) => {
        if(err){
            console.log(err.message);
            res.status(500).send(err.msg);
            db.end();
            return;
        }
        if(result.affectedRows === 0){
            res.status(404).send("Student not found");
            return;
        }
        res.status(200).send("user is deleted");
    })
}

module.exports ={
    addStudent,
    updateStudent,
    getStudents,
    getStudentById,
    deleteStudent
}