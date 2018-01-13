
var mySchema    = require('./models/question');
var express     = require("express");
var bodyParser  = require('body-parser');
var MongoClient = require('mongodb').MongoClient
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;
var MongoClient = require('mongodb').MongoClient;
var mongoose    = require('mongoose');
var db          = require('./configDb');
var app         = express();
var index       = require('./routes/index');
var questions   = require('./routes/questions');

app.use('/', questions);
app.use('/api', questions);

app.use(bodyParser.json());

bodyParser.json({extended: true})
var QuestionModel = mongoose.model('Question', mySchema);

console.log(`app listening on 8080`)
app.listen(8080);

// https://zellwk.com/blog/crud-express-mongodb/