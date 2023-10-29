const express = require('express');
const route = express.Router();
const ProductModel = require('../models/product')
route.get('/', (req, res, next) => {
    let products;
    ProductModel.find({}).then((data) => {
        products = data.map((data) => data.toObject());
        console.log(products);

        res.render('product', { data: products })
    })
})
module.exports = route;