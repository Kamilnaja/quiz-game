
var express       = require("express");
var bodyParser    = require('body-parser');
var MongoClient   = require('mongodb').MongoClient
var mongoose      = require('mongoose');
var Schema        = mongoose.Schema;
var MongoClient   = require('mongodb').MongoClient;
var mongoose      = require('mongoose');
var db            = require('./configDb');
var index         = require('./routes/index');
var questions     = require('./routes/questions');
var mySchema      = require('./models/question');
var QuestionModel = mongoose.model('Question', mySchema);
var app           = express();
var accessControl = require('./accessControl');

app.use(accessControl);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));

app.use('/', questions);
app.use('/api', questions);

console.log(`app listening on 8080`)
app.listen(8080);