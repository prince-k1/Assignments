const express = require('express');
const router = express.Router();
const students = [

    { id: 1, name: "Alice" },
    
    { id: 2, name: "Bob" },
    
    { id: 3, name: "Charlie" }
    
    ];
router.get('/', (req, res) => {
    res.send(`Studens: Alice, Bob, Charlie`);
})

router.get('/:id', (req, res) => {
    const id = +req.params.id-1;
    if(id > 2 || id < 0) res.send('Student not found');
    
    res.send(`Students: ${students[id].name}`);
    
})

module.exports = router;
