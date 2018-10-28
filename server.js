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


 require('./app/routing/apiRoutes')(app)
 require("./app/routing/htmlRoutes")(app)


// Code that starts the server to begin listening
app.listen(PORT, function() {
    console.log('App listening on: http://localhost:' + PORT);
});
