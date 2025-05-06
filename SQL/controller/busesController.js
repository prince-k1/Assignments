const db = require('../utils/db-connection');

const addEntry = (req, res) => {
    const {busName} = req.body;
    const insertQuery = `INSERT INTO bus (busName) VALUES (?)`;
    db.execute(insertQuery,[busName], (err) => {
        if(err){
            console.log(err.message);
            res.status(500).send(err.message);
            db.end();
            return;
        }
        console.log("Bus is inserted");
        res.status(200).send(`${busName} is inserted`);
    })
}

const getEntries = (req, res) => {
    const getQuery = `SELECT * FROM bus`;
    db.execute(getQuery, (err, result) => {
        if(err){
            console.log(err.msg);
            res.status(500).send(err.msg);
            db.end();
            return;
        }
        res.status(200).json(result);
    })
}

module.exports ={
    addEntry,
    getEntries
}