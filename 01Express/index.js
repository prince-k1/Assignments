const express = require('express');
const app = express();

// Dynamic route with route parameter :username
app.get('/welcome/:username', (req, res) => {
    // Extract route parameter
    const username = req.params.username;

    // Extract query parameter (e.g., role)
    const role = req.query.role || 'Guest'; // default to 'Guest' if not provided

    // Send personalized response
    res.send(`Welcome ${username}, your role is ${role}`);
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
