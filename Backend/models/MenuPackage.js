const mongoose = require('mongoose');

const MenuPackageSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})
const MenuPackage = mongoose.model('MenuPackage', MenuPackageSchema);
module.exports = MenuPackage;