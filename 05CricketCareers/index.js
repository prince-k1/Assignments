const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./utils/db-connection');
const cricketerTable = require('./models/cricketTable');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.static('public'));

app.get('/', async (req, res) => {
    const table = await cricketerTable.findAll();
    res.render('home', {table});
})

app.post('/submited', async (req, res) => {
    try{
        const {name, dob, url, birthPlace, career, matches, score, fifties, century, wickets, average} = req.body;
        await cricketerTable.create({name, dob, url, birthPlace, career, matches, score, fifties, century, wickets, average});
        res.redirect('/');
    }catch(error){
        console.error('Error inserting user:', error);
        res.status(500).json({ success: false, message: 'Failed to add user', error: error.message });
    }
})

app.get('/cricketerInfo', async (req, res) => {
    try {
        const { id } = req.query;
        console.log(id);

        if (!id) {
            return res.status(400).json({ success: false, message: 'ID is required' });
        }

        const player = await cricketerTable.findByPk(id);

        if (!player) {
            return res.status(404).json({ success: false, message: 'Player not found' });
        }

        res.render('cricketer', { player: player.dataValues });
    } catch (error) {
        console.error('Error fetching cricketer:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch cricketer', error: error.message });
    }
});

app.get('/editPlayer', async (req, res) => {
     try {
        const { id } = req.query;

        if (!id) {
            return res.status(400).json({ success: false, message: 'ID is required' });
        }

        const player = await cricketerTable.findByPk(id);
        

        if (!player) {
            return res.status(404).json({ success: false, message: 'Player not found' });
        }
        

        res.render('editCrick', { player: player.dataValues });
    } catch (error) {
        console.error('Error fetching cricketer:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch cricketer', error: error.message });
    }
})

app.post('/edited', async (req, res) => {
    const {id, name, dob, url, birthPlace, career, matches, score, fifties, century, wickets, average} = req.body;
     await cricketerTable.update(
            { name, dob, url, birthPlace, career, matches, score, fifties, century, wickets, average },
            { where: { id } }
        );
    res.redirect('/');
})


sequelize.sync().then(() => {
    app.listen(4040, () => console.log('Server running on 4040'));
});