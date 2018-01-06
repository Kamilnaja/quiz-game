var db = require('../configDb');

var Post = db.model('Post', {
    id: {type: String, required: false},
    title: {type: String, required: true},
    answers: {type: Array, required: true},
    goodAnswer: {type: String, required: false}
})

module.exports = Post;