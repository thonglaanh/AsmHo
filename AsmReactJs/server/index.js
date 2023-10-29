const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const routeAccount = require('./route/account')
const routeProduct = require('./route/product')

const hbs = require('express-handlebars')
app.engine('hbs', hbs.engine(
    { extname: '.hbs' }
));
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use('/', routeAccount)
app.use('/product', routeProduct)

app.listen(3000, () => {
    console.log('Server started on port!');
})