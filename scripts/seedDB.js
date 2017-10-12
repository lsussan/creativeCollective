

const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/creativeCollective",
  {
    useMongoClient: true
  }
);

const userSeed = [
  {
    name: "Captain Sparrow",
    email: "master@yahoo.com",
    password:"hater8080",
    specialty:"Actor",
    image: ""
  },
  {
    name: "John Travolta",
    email: "JohnT@gmail.com",
    password:"John2020",
    specialty:"actor",
    image:""
  },
  {
    name: "Russell Simmons",
    email: "rundmc@yahoo.com",
    password:"dmc1",
    specialty:"producer",
    image:""
}
];

db.User
.remove({})
.then(() => db.User.collection.insertMany(userSeed))
.then(data => {
  console.log(data.insertedIds.length + " users inserted!");
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
