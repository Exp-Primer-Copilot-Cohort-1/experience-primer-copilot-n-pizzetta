// Create web server
const express = require('express');
const app = express();

// Create a route for the home page
app.get('/', (req, res) => {
    res.send('Welcome to the home page');
});

// Create a route for comments
app.get('/comments', (req, res) => {
    res.send('Welcome to the comments page');
});

// Start listening for requests
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});




