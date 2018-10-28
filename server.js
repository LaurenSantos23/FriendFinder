//Dependencies

const express = require('express');
const path = require('path');
// there is an error being thrown about apiRoutes when I run node.js
const apiRoutes = require('./app/routing/apiRoutes')
const htmlRoutes = require(".app/routing/htmlRoutes")

//Setting up express App

const app = express();

//Setting port to 3000
const PORT = process.env.PORT || 3000;

// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(apiRoutes);

// Code that starts the server to begin listening
app.listen(PORT, function() {
    console.log('App listening on: http://localhost:' + PORT);
});
