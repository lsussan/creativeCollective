'use strict'

const express = ("express");
const bodyParser = ("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

//require UserProfile schema
const UserProfile = require("./models/UserProfile")

//create instance of express
const app = express();
//sets initial port
const PORT = process.env.PORT || 8080;

// Run Morgan for Logging
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// -------------------------------------------------

mongoose.connect("mongodb://localhost/nytreact");

// var MONGODB_URI = "mongodb://heroku_rl36q2jw:gus0pqk89m8sc8oadverlrjefs@ds147864.mlab.com:47864/heroku_rl36q2jw";
// mongoose.connect(MONGODB_URI);

var db = mongoose.connection;

// Listener.
app.listen(process.env.PORT, () => {
    console.log("App listening on PORT: " + PORT);
});