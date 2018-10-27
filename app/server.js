//Dependencies

const express = require('express');
const path = require('path');

//Setting up express App

const app = express();

//Setting port to 3000
const PORT = process.env.PORT || 3000;

// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

//Routes 

//Basic route that sends the user first to the Welcome Page 
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(PORT, function() {
    console.log('App listening on: http://localhost:' + PORT);
});

