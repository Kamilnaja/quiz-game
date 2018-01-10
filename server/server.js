var mySchema = require('./models/question');
var express = require("express");
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var MongoClient = require('mongodb').MongoClient;
var app = express();
var mongoose = require('mongoose');
var db = require('./configDb');

var MyModel = mongoose.model('Question', mySchema);

var instance = new MyModel();
instance.title = '22:49';

instance.save((err) => {

})

MyModel.find({}, (err, docs) => {
    console.log(docs);
})

console.log(`app listening on 8080`)
app.listen(8080);

// https://zellwk.com/blog/crud-express-mongodb/