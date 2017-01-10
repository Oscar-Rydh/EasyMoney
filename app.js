var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var aktier = require('./api/aktier');
var app = express();

var db = 'aktier'
var dbconnection = 'mongodb://localhost:27017/' + db

mongoose.connect(dbconnection)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())
app.use('/api', aktier);

module.exports = app