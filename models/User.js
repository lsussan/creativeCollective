var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String, 
        trim: true
    },
    email: {
        type: String, 
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"], 
        trim: true
    },
    password:{
        types: String,
        match: String, 
    },
    specialty: {
        type: String, 
        trim: true
    },
    image: {
        type: String,
        trim: true,
    }

});

//add username and password  and add validation to input username 
var User = mongoose.model("User", UserSchema);

module.exports = User;