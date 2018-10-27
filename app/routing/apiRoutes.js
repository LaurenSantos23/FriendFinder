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
    
    