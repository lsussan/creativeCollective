var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    specialty: {
        type: String
    },
});

var UserProfile = mongoose.model("UserProfile", UserSchema);
module.exports = UserProfile;