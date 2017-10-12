const express = require ("express");
const bodyParser = require ("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
// const routes = require("./routes");

//require UserProfile schema
const User = require("./models/User")

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

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

// -------------------------------------------------
app.use(express.static("./client/public"));

// app.use(routes);
mongoose.connect("mongodb://localhost/creativeCollective");



var db = mongoose.connection; 

 db.on("error", function(err) {
    console.log("Mongoose Error: ", err);
  });
  
  db.once("open", function() {
    console.log("Mongoose connection successful.");
  });
//get from all users//
  app.get("/api/saved", function(req, res) {
    User.find({})
      .exec(function(err, doc) {
        if (err) {
          console.log(err);
        }
        else {
          res.send(doc);
        }
      });
  });
  
  // Route to add user to database
  app.post("/api/saved", function(req, res) {
    var newUser = new User(req.body);
    console.log(req.body);
    newUser.save(function(err, doc) {
      if (err) {
        console.log(err);
      }
      else {
        res.send(doc);
      }
    });
  });
  
  // Route to delete an article from saved list
  app.delete("/api/saved/", function(req, res) {
    var url = req.param("url");
    User.find({ url: url }).remove().exec(function(err) {
      if (err) {
        console.log(err);
      }
      else {
        res.send("Deleted");
      }
    });
  });

  app.get("/", function(req, res) {
    res.sendFile(__dirname + "/client/public/index.html");
  });


// Listener.
app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT);
});