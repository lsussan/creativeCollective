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
    specialty: {
        type: String, 
        trim: true
    },

});

//add username and password  and add validation to input username 
var UserProfile = mongoose.model("UserProfile", UserSchema);

module.exports = UserProfile;