const mongoose = require('mongoose');

const MenuItemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})
const MenuItem = mongoose.model('MenuItem', MenuItemSchema);
  
module.exports = MenuItem;