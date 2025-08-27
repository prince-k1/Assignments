const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./utils/db-connection');
const Meeting = require('./models/meeting');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.static('public'));

// Dummy availability array
let slots = [
    { time: '2 AM', availableSeats: 4 },
    { time: '3 AM', availableSeats: 4 },
    { time: '4 AM', availableSeats: 4 },
    { time: '5 AM', availableSeats: 4 }
];

app.get('/', async (req, res) => {
    const meetings = await Meeting.findAll();
    res.render('home', { slots, meetings });
});

app.post('/book', async (req, res) => {
    const { name, email, slotIndex } = req.body;
    
    if (slots[slotIndex].availableSeats > 0) {
        slots[slotIndex].availableSeats -= 1;

        await Meeting.create({ name, email, slotIndex });

        res.json({ success: true, slots });
    } else {
        res.json({ success: false, message: 'No slots available' });
    }
});


app.post('/cancel', async (req, res) => {
    const { id, slotIndex } = req.body;

    await Meeting.destroy({ where: { id } });

    slots[slotIndex].availableSeats += 1;

    res.json({ success: true, slots });
});


sequelize.sync().then(() => {
    app.listen(4040, () => console.log('Server running on 4040'));
});
