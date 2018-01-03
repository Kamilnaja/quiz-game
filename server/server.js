var express = require("express");
var app = express();

var bodyParser = require('body-parser');

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

app.get('/questions', (req, res) => {
    res.send(JSON.stringify(
        [{
            id: 1,
            title: 'Makaron z dziurką w środku, to',
            answers: [
                'Tagiattelle', 'Spagetti', 'Bucatini', 'Stilfretto'],
            goodAnswer: 'Bucatini'
        },
        {
            id: 2,
            title: 'Zupa z Francji z owocami morza, to:',
            answers: [
                'Zupa Cebulowa', 'Ucha', 'Barszcz', 'Bouillabaisse'],
            goodAnswer: 'Bouillabaisse'
        },
        {
            id: 3,
            title: 'Najwyższa góra na świecie',
            answers: [
                'Mont Black', 'K2', 'Kilimandżaro', 'Mont Everest'],
            goodAnswer: 'Mont Everest'
        },
        {
            id: 4,
            title: 'Ciemne, mocne piwo, to inaczej: ',
            answers: [
                'Podpiwek', 'Lager', 'IPA', 'Porter'],
            goodAnswer: 'Porter'
        },
        
        ]));

})
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8080);