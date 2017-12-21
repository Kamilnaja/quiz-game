var express       = require('express');
const bodyParser  = require('body-parser');
const MongoClient = require('mongodb').MongoClient
const db          = require('./db');
var port          = 8080;
var app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
require('./routes')(app, {});


app.use(bodyParser.json());

var router = express.Router();

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

MongoClient.connect(db.url, (err, database) => {
    if (err) return console.log(err);

    require('./routes')(app, database);
    
    app.listen(port, () => {
        console.log("listening at " + port);
    });    
})


app.get("/", (req, res) => {
    res.send("hello world");
})
// MongoClient.connect(db.url, function (err, database) {
//     if (err) return console.log(err);
//     require(database);

//     const collection = db.collection('questions')
//     collection.find({}).toArray(function (err, result) {
//         if (err) throw err

//         console.log(result);
//     })
// })




// app.use('/api', router);


