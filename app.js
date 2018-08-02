const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/BorsaIzmırV1');
const app = express();

app.use(morgan('dev'));

app.use(bodyParser.json());

app.use('/users', require('./routes/users'));

const port = process.env.PORT || 5000;

app.listen(5000);
console.log(`listen ${port}`);