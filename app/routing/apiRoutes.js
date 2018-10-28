//Dependencies
const express = require('express');
const path = require('path');

//do i need to put a const for apiRoute in this page?

let friends = require("../data/friends.js");

// Routes

module.exports = function (app) {
	// Get all potential friends
	app.get("/api/friends", function (req, res) {
		res.json(friends);
    });
    
app.post("/api/friends", function(req, res){
    //grabs the new users scores to compare with friends in the friends array
    let newFriendScore = req.body.scores;
    let scoresArray = [];
    let friendCount = 0;
    let bestMatch = 0;

    //loop to run through the current friends list
    for (let i=0; i<friends.length; i++){
        let totalDifference = 0;
        console.log(friends[i])
        //run through the scores in the friends array to compare friends
        for (let j=0; j<newFriendScore.length; j++) {
            console.log("nfs:" + newFriendScore[i])
            totalDifference +- (Math.abs(parseInt(friends[i].scores[j])- parseInt(newFriendScore[j])));
            console.log("score dif" + totalDifference);
        }
        //push into the scoresArray
        scoresArray.push(totalDifference);
    }
    // after all friends are compared find the best match based on similar scores
    for (let i=0; i<friends.length; i++){
        console.log("scoresArray[i] "+ scoresArray[i]+" scoresArray[bestMatch] " + scoresArray[bestMatch] )
        if(scoresArray[i]<= scoresArray[bestMatch]){
           bestMatch = i;
        }
    }
    //retun bestMatch data
    let veryBestFriend = friends[bestMatch];
    
    //push new submission into the friends array
    friends.push(req.body);
    res.json(veryBestFriend);
});

};