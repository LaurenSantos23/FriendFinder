//dependencies
const path = require('path');

//routing

module.exports = function(app){
    //Routes 

// route that sends the user first to the Welcome Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});
// route to send to the survey page
app.get("/survey", function (req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

};