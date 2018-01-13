var mongoose       = require('mongoose');
var QuestionSchema = require('../models/question');
var QuestionModel  = mongoose.model('Question', QuestionSchema);

exports.index = (req, res) => {
    res.send('Main site');
}

exports.create_question = (req, res) => {
    var questionInstance = new QuestionModel({
        title: req.body.title,
        goodAnswer: req.body.goodAnswer,
        answers: req.body.answers
    });
    questionInstance.save((err) => {
        if (err) return err;
    })
    res.send("zapisano pytanie");
}

exports.questions_list = (req, res) => {
    QuestionModel.find({})
    .sort('-date')
    .exec((err, list_questions) => {
        if (err) { return (err) }
        res.send(list_questions);
    })
}

exports.question_detail = (req, res) => {   
    res.send('Not implemented: Question details ' + req.params.id)
}

exports.delete_question = (req, res) => {
    res.send('Not implemented: delete Question');
}