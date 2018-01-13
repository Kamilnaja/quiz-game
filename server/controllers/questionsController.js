var Question = require('../models/question');

exports.index = (req, res) => {
    res.send('Not implemented: Home page');
}

exports.create_question = (req, res) => {
    res.send('Not implemented yet: dodaj pytanie');
}

exports.questions_list = (req, res) => {
    res.send('Not implemented questions list');
}

exports.question_detail = (req, res) => {
    res.send('Not implemented: Question details ' + req.params.id)
}

exports.delete_question = (req, res) => {
    res.send('Not implemented: delete Question');
}