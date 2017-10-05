var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    userName: {
        type:String,
        trim: true,
        required:"String is required"
    },
    password: {
        type:String,
        trim:true
    },
    name: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
    },
    specialty: {
        type: String
    },

});

var UserProfile = mongoose.model("UserProfile", UserSchema);
module.exports = UserProfile;