const db = require('../utils/db-connection');
const addEntries = (req, res) => {
    const {email, name} = req.body;
    const insertQuery = `INSERT INTO Students (email, name) VALUES (?,?)`;

    db.execute(insertQuery, [email,name], (err) => {
        if(err){
            console.log(err);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log('inserted');
        res.status(200).send(`${name} inserted`);
    })
}

const updateEntry = (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const updateQuery = `UPDATE Students set name = ? where id = ?`;
    
    db.execute(updateQuery, [name, id], (err, result) => {
        if(err){
            console.log(err);
            db.end();
            res.status(500).send(err.message);
            return;
        }
        if(result.affectedRows === 0){
            res.status(404).send(`Student not found`);
            return;
        }

        res.status(200).send(`Updated`);
    })
}

const deleteEntry = (req, res) => {
    const {id} = req.params;
    const deleteQuery = `DELETE FROM Students where id = ?`;

    db.execute(deleteQuery, [id], (err, result) => {
        if(err){
            console.log(err);
            db.end();
            res.status(500).send(err.message);
            return;
        }

        if(result.affectedRows === 0){
            res.status(404).send(`Student not found`);
            return;
        }

        res.status(200).send(`Student deleted`);
    })
}

module.exports = {
    addEntries,
    updateEntry,
    deleteEntry
}