var express = require("express");
var mongoose = require("mongoose");
var port = 8080;
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://kamil:0000@ds159696.mlab.com:59696/quiz");
var nameSchema = new mongoose.Schema({
    title: String,
});

var Question = mongoose.model("Question", nameSchema);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/addquestion", (req, res) => {
    var myData = new Question(req.body);
    myData.save()
        .then(item => {
            res.send("Name saved to database");
        })
        .catch(err => {
            res.status(400).send("Unable to save to database");
        });
});

app.listen(port, () => {
    console.log("Server listening on port " + port);
});