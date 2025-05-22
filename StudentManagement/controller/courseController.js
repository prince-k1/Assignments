// const courses = require('../models/courses');
const Courses = require('../models/courses');
const Student = require('../models/studentTable');
const addCourses = async (req, res) => {
    try{
        const {name} = req.body;
        const course = await Courses.create({'name': name});
        res.status(200).send(course);
    }catch(error){
        res.status(500).send(error.message);
    }
}
const addStudentToCourse = async (req, res) => {
    try{
        const {studentId, courseID} = req.body;
        const student = await Student.findByPk(studentId);
        const course = await Courses.findAll({
            where:{
                id: courseID
            }
        })
        await student.addCourses(course);
        const updatedStudent = await Student.findByPk(studentId, {include: Courses});
        res.status(201).json(updatedStudent);
    }catch(error){
        res.status(500).json(error.message);
    }
}


module.exports = {addCourses, addStudentToCourse};