const express = require('express');
const router = express.Router();

// Dummy data
const courses = [
    { id: 1, name: 'Mathematics' },
    { id: 2, name: 'Physics' },
    { id: 3, name: 'Computer Science' }
];

// GET /courses - List all courses
router.get('/', (req, res) => {
    res.json(courses);
});

// GET /courses/:id - Fetch course by ID
router.get('/:id', (req, res) => {
    const courseId = parseInt(req.params.id);
    const course = courses.find(c => c.id === courseId);
    if (course) {
        res.json(course);
    } else {
        res.status(404).send('Course not found');
    }
});

module.exports = router;
