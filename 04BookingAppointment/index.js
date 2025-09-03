const express = require('express');
const app = express();
const path = require('path');
const sequelize = require('./utils/db-connection');
const userTable = require('./models/userTable');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use(express.static('public'));

app.get('/', async (req, res) => {
    const table = await userTable.findAll();
    // console.log(table);
    res.render('home', {data: table});
})

app.post('/submited', async (req, res) => {
    try {
        const { username, email, phone } = req.body;

        if (!username || !email || !phone) {
            return res.status(400).json({ success: false, message: 'All fields are required' });
        }

        await userTable.create({ name: username, email, phone });

        res.redirect('/');
    } catch (error) {
        console.error('Error inserting user:', error);
        res.status(500).json({ success: false, message: 'Failed to add user', error: error.message });
    }
});

app.post('/cancel', async (req, res) => {
    const {id} = req.body;
    await userTable.destroy({where : {id}});
    res.json({success: true});
})

app.put('/edit', async (req, res) => {
    const {id, name, email, phone} = req.body;
    await userTable.update(
        {name, email, phone},
        {where : {id}}
    )
    res.redirect('/');
})

sequelize.sync().then(() => {
    app.listen(4040, () => console.log('Server running on 4040'));
});