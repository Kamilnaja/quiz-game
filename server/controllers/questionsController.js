var Question = require('../models/question');

exports.index = (req, res) => {
    res.send('Not implemented: Home page');
}

exports.questions_list = (req, res) => {
    res.send('Not implemented questions list');
}

exports.question_detail = (req, res) => {
    res.send('Not implemented: Question details ' + req.params.id)
}

exports.question_delete_post = (req, res) => {
    res.send('Not implemented: delete Question');
}