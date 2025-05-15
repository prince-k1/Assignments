const db = require('../utils/db-connection');
const Bus = require('../models/busTable');
const addEntry = async (req, res) => {
    
    try{
        const {busName} = req.body;
        const bus = await Bus.create({
            name: busName
        })
        res.status(201).send(`bus added`);
    }catch(error){
        res.status(500).send(error.message);
    }
}

const getEntries = async (req, res) => {
    try{
        const bus = await Bus.findAll();
        res.status(200).send(bus);
    }catch(error){
        res.status(500).send(error.message);
    }
}

module.exports ={
    addEntry,
    getEntries
}