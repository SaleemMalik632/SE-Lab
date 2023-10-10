const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/Malik', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Connected to database');
    } catch (error) {
        console.error('Error in database connection:', error);
        process.exit(1); // Exit the process with a failure code
    }
};

module.exports = connectDB;