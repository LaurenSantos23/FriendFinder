//Dependencies

const express = require('express');
const path = require('path');

//Setting up express App

const app = express();
const PORT = 3000;

// Sets up Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());

console.log

