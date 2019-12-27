const mongoose = require('mongoose');
const MenuPackage = require('./MenuPackage');
const MenuItem = require('./MenuItem');
const Review = require('./Review');

const CateringProviderSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0
    },
    address: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    menuItems: {
        type: [MenuItem.schema]
    },
    menuPackages: {
        type: [MenuPackage.schema]
    },
    reviews: {
        type: [Review.schema]
    }

})
const CateringProvider = mongoose.model('CateringProvider', CateringProviderSchema);
module.exports = CateringProvider;