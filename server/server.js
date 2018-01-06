var express = require("express");
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
var Question = require('./models/question');
var mongoose = require('mongoose');

var app = express();
app.use(bodyParser.json());

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/questions', (req, res, next) => {
    var question = new Question ({
        title: 'lorem',
        answers: ['lorem', 'ipsum'],
        goodAnswer: ['lorem']
    })
    // question.save((err, question) => {
    //     if (err) { return next(err)}
    //     res.json(201, question);
    // })
    console.log(question);
})

app.get('/api/questions', (req, res, next) => {
    Question.find(function(err, questions) {
        // if (err) { return next(err)}
        res.json(posts);
    })
    res.send('lorem ipsum mocium panie')
});
console.log(`app listening on ${8080}`)
app.listen(8080);