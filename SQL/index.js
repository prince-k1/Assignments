const express = require('express');
const db = require('./utils/db-connection');
const app = express();
const userRoutes = require('./routes/usersRoutes');
const busesRouts = require('./routes/busesRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const paymentRoutes = require('./routes/paymentRoute');
app.use(express.json());



app.use("/users", userRoutes);
app.use("/buses", busesRouts);
app.use('/payment', paymentRoutes);
app.use('/booking', bookingRoutes);


app.listen(3000, (err) => {
    console.log("server is running")
})