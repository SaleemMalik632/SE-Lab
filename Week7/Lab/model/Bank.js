const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: true
    },
    cardType: {
        type: String,
        required: true
    },
    cardName: {
        type: String,
        required: true
    },
    cardNumber: {
        type: Number,
        required: true
    },
    cardHolderName: {
        type: String,
        required: true
    },
    issueDate: {
        type: Date,
        required: true
    },
    cardExpiryDate: {
        type: Date,
        required: true
    },
    cardCpbiNumber: {
        type: Number,
        required: true
    }
});

const Bank = mongoose.model('Bank', bankSchema);

module.exports = Bank;
