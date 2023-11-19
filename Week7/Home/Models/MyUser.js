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
   
    }
    
    
);
// Create the collection model
const User = mongoose.model('MyUser', AdminSchema);
module.exports = User;



// Path: Routes/User.js