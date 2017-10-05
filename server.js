const express = require ("express");
const bodyParser = require ("body-parser");
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
app.use(express.static("public"));

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/creativeCollective");

// var MONGODB_URI = "mongodb://heroku_rl36q2jw:gus0pqk89m8sc8oadverlrjefs@ds147864.mlab.com:47864/heroku_rl36q2jw";
// mongoose.connect(MONGODB_URI);

var db = mongoose.connection; 

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
  });
  
  db.once("open", function() {
    console.log("Mongoose connection successful.");
  });

  app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });

db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
  });
  
  db.once("open", function() {
    console.log("Mongoose connection successful.");
  });
  
  // -------------------------------------------------
  
  // Main "/" Route. This will redirect the user to our rendered React application
  app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/index.html");
  });

// Listener.
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});