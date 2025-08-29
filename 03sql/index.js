const express = require('express');
const db = require('./utils/db-connection');

const app = express();
const PORT = 3000;
const studentRouter = require('./routes/studentRoutes');

app.use(express.json());
app.use('/student', studentRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});