var express = require("express");
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient
var Question = require('./models/question');
var mongoose = require('mongoose');
var db = require('./configDb');
var dbase;

var MongoClient = require('mongodb').MongoClient;

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

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);
    dbase = database.db('quiz');
})

app.get('/api/questions', (req, res) => {
    dbase.collection("questions").find({}).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.post('/api/questions', (req, res) => {
    dbase.collection('questions').save(req.body, (err, result) => {
        if (err) return console.log(err);
        console.log('saved to db');
        res.redirect('/');
    })
})

console.log(`app listening on 8080`)
app.listen(8080);

// https://zellwk.com/blog/crud-express-mongodb/