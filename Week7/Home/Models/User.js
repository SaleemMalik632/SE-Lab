const mongoose = require('mongoose');

// The schema for the collection and the data types of the collection
const  AdminSchema   = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    Email: {
        type: String,
        require: true,
    },
    Password: {
        type: String,
        require: true,
    },
    Role:{
        type: String,
        require: true,
        enum: ["Admin", "User", "Moderator"], // enum means string objects User, Admin, Moderator

    },

    }
);
// Create the collection model
const User = mongoose.model('User', AdminSchema);
module.exports = User;



// Path: Routes/User.js