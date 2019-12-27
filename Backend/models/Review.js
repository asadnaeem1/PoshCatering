const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;