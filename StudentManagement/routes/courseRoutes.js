const express = require('express');
const router = express.Router();
const controller = require('../controller/courseController');

router.post('/addCourse', controller.addCourses);
router.get('/addStudentCourse', controller.addStudentToCourse);

module.exports = router;