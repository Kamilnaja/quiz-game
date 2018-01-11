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

app.use(bodyParser.json());

bodyParser.json({extended: true})
var QuestionModel = mongoose.model('Question', mySchema);

app.get('/', (req, res) => {
    res.send('default route');
})

app.get('/api/questions', (req, res, next) => {
    QuestionModel.find({}, (err, docs) => {
        if (err) return next(err);
        res.send(docs);
    })
})

app.get('/api/questionsFive', (req, res, err) => {
    if (err) return next(err);
    QuestionModel.find({'title': 'lorem'}).
    limit(5).
    exec((err, docs) => {
        res.send(docs);
    })
})

app.post('/api/questions', (req, res, next) => {
    var questionInstance = new QuestionModel({
    });
    questionInstance.title = req.body.title;
    console.log(questionInstance.title);
    questionInstance.save((err) => {
    })
    res.send('zapisano');
    res.redirect('/');
})

console.log(`app listening on 8080`)
app.listen(8080);

// https://zellwk.com/blog/crud-express-mongodb/