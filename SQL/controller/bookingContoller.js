const db = require('../utils/db-connection');
const Booking = require('../models/bookingTable');
const addEntry = async (req, res) => {
    
    try{
        const {booking} = req.body;
        const bus = await Booking.create({
            booking: booking
        })
        res.status(201).send(`booking added`);
    }catch(error){
        res.status(500).send(error.message);
    }
}

const getEntries = async (req, res) => {
    try{
        const bus = await Booking.findAll();
        res.status(200).send(bus);
    }catch(error){
        res.status(500).send(error.message);
    }
}

module.exports ={
    addEntry,
    getEntries
}