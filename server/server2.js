var express = require('express');
var bodyParser = require('body-parser');
var Post = require('./models/post');
var app = express();
app.use(bodyParser.json);
app.get('/post', function (req, res) {
    res.send('działa');
})
app.get('/api/posts', function (req, res, next) {
    Post.find(function(err, post) {
        if (err) { return next(err)}
        res.json(posts);
    })
})

app.post('/api/posts', function (req, res, next) {
    var post = new Post ({
        username: req.body.username,
        body: req.body.body
    })
    post.save(function(req, res, next) {
        if (err) {return next(err)}
        res.json(201, post);
    })
})

app.listen(3000, function () {
    console.log('listen on ', 3000);
})