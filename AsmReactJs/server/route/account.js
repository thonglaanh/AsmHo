const express = require('express');
const route = express.Router();
const AccountModel = require('../models/account')
route.get('/', (req, res, next) => {
    let accounts;
    AccountModel.find({}).then((data) => {
        accounts = data.map((data) => data.toObject());

        res.render('account', { data: accounts })
    })
})
module.exports = route;