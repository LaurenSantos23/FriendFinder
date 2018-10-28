//Dependencies
const express = require('express');
const path = require('path');

//do i need to put a const for apiRoute in this page?

var friends = require("../data/friends.js");

// Routes

module.exports = function (app) {
	// Get all potential friends
	app.get("/api/friends", function (req, res) {
		res.json(friends);
    });
    
app.post("/api/friends", function(req, res){
    //grabs the new users scores to compare with friends in the friends array
    const newFriendScore = req.body.scores;
    const scoresArray = [];
    let friendCount = 0;
    let bestMatch = 0;

    //loop to run through the current friends list
    for (let i=0; i<friends.length; i++){
        let totalDifference = 0;
        //run through the scores in the friends array to compare friends
        for (let j=0; j<newFriendScore.length; j++) {
            totalDifference +- (Math.abs(parseInt(friends[i].scores[j])- parseInt(newFriendScore[j])));
        }
        //push into the scoresArray
        scoresArray.push(totalDifference);
    }
    // after all friends are compared find the best match based on similar scores
    for (let i=0; i<scoresArray.length; i++){
        if(scoresArray[i]<= scoresArray[bestMatch]){
           bestMatch = i;
        }
    }
    //retun bestMatch data
    const veryBestFriend = friends[bestMatch];
    
    //push new submission into the friends array
    friends.push(req.body);
    res.json(veryBestFriend);
});

};