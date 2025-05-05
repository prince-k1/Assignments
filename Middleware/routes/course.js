const express = require('express');
const router = express.Router();
const courses = [

    { id: 1, name: "Frontend", description: "HTML, CSS, JS, React" },
    
    { id: 2, name: "Backend", description: "Node.js, Express, MongoDB" }
    
    ];
router.get('/', (req, res) => {
    res.send(`Courses: Frontend, Backend`);
})

router.get('/:id', (req, res) => {
    const id = +req.params.id-1;
    // console.log(id);
    if(id > 1 || id < 0 ) res.send('course not found');

    res.send(`Courses:${courses[id].name}, Description:${courses[id].description}`);
    
})

module.exports = router;
