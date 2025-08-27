const express = require('express');
const router = express.Router();

// Dummy data
const students = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Mike Johnson' }
];

// GET /students - List all students
router.get('/', (req, res) => {
    res.json(students);
});

// GET /students/:id - Fetch student by ID
router.get('/:id', (req, res) => {
    const studentId = parseInt(req.params.id);
    const student = students.find(s => s.id === studentId);
    if (student) {
        res.json(student);
    } else {
        res.status(404).send('Student not found');
    }
});

module.exports = router;
