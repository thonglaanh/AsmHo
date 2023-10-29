const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/myproject');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    image: String,
    name: String,
    price: String,
    discount: String,
    sold: String,
    rating: String,
    city: String,
    root: String,
    descreption: String,
    voicher: String
},
    {
        collection: 'product',
    });

const AccountModel = mongoose.model('product', ProductSchema);
module.exports = AccountModel;
