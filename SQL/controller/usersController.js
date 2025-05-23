const db = require('../utils/db-connection');
const User = require('../models/usersTable');
const addEntry = async (req, res) => {
    
    try{
        const {name} = req.body;
        const bus = await User.create({
            name: name
        })
        res.status(201).send(`bus added`);
    }catch(error){
        res.status(500).send(error.message);
    }
}

const getEntries = async (req, res) => {
    try{
        const bus = await User.findAll();
        res.status(200).send(bus);
    }catch(error){
        res.status(500).send(error.message);
    }
}

module.exports ={
    addEntry,
    getEntries
}