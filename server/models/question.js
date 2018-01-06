var db = require('../configDb');

var Question = db.model('Question', {
    id: {type: String, required: false},
    title: {type: String, required: true},
    answers: {type: Array, required: true},
    goodAnswer: {type: String, required: false}
})

module.exports = Question;