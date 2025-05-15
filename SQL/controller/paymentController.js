const db = require('../utils/db-connection');
const Payment = require('../models/paymentTable');
const addEntry = async (req, res) => {
    
    try{
        const {payment} = req.body;
        const bus = await Payment.create({
            payment: payment
        })
        res.status(201).send(`Payment added`);
    }catch(error){
        res.status(500).send(error.message);
    }
}

const getEntries = async (req, res) => {
    try{
        const bus = await Payment.findAll();
        res.status(200).send(bus);
    }catch(error){
        res.status(500).send(error.message);
    }
}

module.exports ={
    addEntry,
    getEntries
}