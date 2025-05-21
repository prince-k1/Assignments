
const db = require('../utils/db-connection');
const Student = require('../models/studentTable');
const IdentityCard = require('../models/identityCard');
const addStudent = async (req, res) => {
    try {
        const { name, email, age } = req.body;
        const student = await Student.create({
            name: name,
            email: email,
            age: age
        })
        res.status(201).send(`user with name ${name} is added`);
    } catch (error) {
        res.status(500).send(error.message);
    }


    // const insertQuery = `INSERT INTO students(name, email, age) VALUES (?,?,?)`;
    // db.execute(insertQuery, [name, email, age], (err) => {
    //     if(err){
    //         console.log(err.message);
    //         res.status(500).send(err.message);
    //         db.end();
    //         return;
    //     }
    //     console.log("Student Inserted");
    //     res.status(200).send(`Student with name ${name} added`);
    // })

}

const addValuesToStudentAndIdentityTable = async (req, res) => {
    // {
    //     Student : { name : "john doe"}
    //     identityCard : {cardNumber: "10"}
    // }

    try{
        const student = Student.create(req.body.student);
        console.log(student.id);
        const idCard = IdentityCard.create({...req.body.IdentityCard, boyId: student.id});
        res.status(201).send(student.idCard);
    }catch(error){
        res.status(500).send(error.message);
    }
}

const getStudents = (req, res) => {
    const getQuery = `SELECT * FROM students`;

    db.execute(getQuery, (err, result) => {
        if (err) {
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        res.status(200).json(result);
    })
}

const getStudentById = (req, res) => {
    const { id } = req.params;
    const getQuery = `SELECT * FROM students WHERE id = ?`;

    db.execute(getQuery, [id], (err, result) => {
        if (err) {
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        res.status(200).json(result[0]);
    })

}

const updateStudent = async (req, res) => {

    try {
        const { id } = req.params;
        const { name, email, age } = req.body;
        const student = await Student.findByPk(id);
        if (!student) {
            res.status(404).send("Student not found");
        }
        student.name = name;
        student.email = email;
        student.age = age;
        await student.save();
        res.status(200).send("updated");
    } catch (error) {
        res.status(500).send(error.message);
    }



    //const updateQuery = 'UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?';
    // db.execute(updateQuery, [name, email, age, id], (err, result) => {
    //     if(err){
    //         console.log(err.message);
    //         res.status(500).send(err.message);
    //         db.end();
    //         return;
    //     }

    //     if(result.affectedRows === 0){
    //         res.status(404).send("student not found");
    //         return;
    //     }
    //     res.status(200).send("user has been updated");
    // })
}

const deleteStudent = async (req, res) => {
    
    try{
        const { id } = req.params;
        const student = await Student.destroy({
            where:{
                id: id
            }
        })
        if(!student){

            res.status(404).send(`boy not found ${id}`);
        }
        res.status(200).send(`deleted`);
    }catch(error){
        res.status(500).send(error.message);
    }

    //const deleteQuery = `DELETE FROM students where id = ?`;
    // db.execute(deleteQuery, [id], (err, result) => {
    //     if (err) {
    //         console.log(err.message);
    //         res.status(500).send(err.msg);
    //         db.end();
    //         return;
    //     }
    //     if (result.affectedRows === 0) {
    //         res.status(404).send("Student not found");
    //         return;
    //     }
    //     res.status(200).send("user is deleted");
    // })
}

module.exports = {
    addStudent,
    updateStudent,
    getStudents,
    getStudentById,
    deleteStudent,
    addValuesToStudentAndIdentityTable
}