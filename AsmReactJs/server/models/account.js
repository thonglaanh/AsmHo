const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/myproject');

const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    email: String,
    password: String
},
    {
        collection: 'account',
    });

const AccountModel = mongoose.model('account', AccountSchema);
module.exports = AccountModel;
