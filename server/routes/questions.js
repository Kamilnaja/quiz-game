var express = require('express');
var router = express.Router();

var question_controller = require('../controllers/questionsController');

// Questions Routes

router.get('/', question_controller.index);
router.get('/api/questions', question_controller.questions_list);
router.get('/api/question/:id', question_controller.display_question);
router.options('/api/create_question', question_controller.create_question);
router.post('/api/create_question', question_controller.create_question);
router.delete('/api/delete_question/:id', question_controller.delete_question);
router.options('/api/delete_question/:id', question_controller.delete_question);
router.get('/api/questions_list_length', question_controller.questions_list_length);
module.exports = router;