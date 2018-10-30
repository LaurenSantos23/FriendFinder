//Dependencies

var express = require('express');
var path = require('path');
//Setting up express App

var app = express();

//Setting port to 3000
var PORT = process.env.PORT || 3000;

// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());


 require('./app/routing/apiRoutes')(app)
 require("./app/routing/htmlRoutes")(app)


// Code that starts the server to begin listening
app.listen(PORT, function() {
    console.log('App listening on: http://localhost:' + PORT);
});
