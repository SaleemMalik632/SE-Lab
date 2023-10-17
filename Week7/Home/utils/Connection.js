const mongoose = require('mongoose');

async function ConnectToDatabase() {
    try {
        await mongoose.connect('mongodb://0.0.0.0:27017/HomeWork', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });  
        console.log("Connected to the database");
    } catch (error) {
        console.error("Failed to connect to the database:", error);
    }
}

module.exports = ConnectToDatabase;
