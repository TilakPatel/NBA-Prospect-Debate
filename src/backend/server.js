const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('').then(() => {
    console.log('Connected!');
}).catch(() => {
    console.log('Error');
});
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);