const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const cors = require('cors');

const config = require('./config');

const app = express();

mongoose.connect(config.database, { useNewUrlParser: true }, (err => {
    if (err) {
        console.log(err);
    } else {
        console.log('db connected');
    }
}))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(cors());

app.get('/', (req, res, next) => {

    res.json({
        user: 'hussain'
    })
});

app.listen(config.port, (err) => {
    console.log('magic at ', config.port);
})
