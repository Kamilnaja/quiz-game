var express = require('express');
var router = express.Router();

var question_controller = require('../controllers/questionsController');

// Questions Routes

router.get('/', question_controller.index);
router.get('/api/questions', question_controller.questions_list);
router.post('/api/create_question', question_controller.create_question);
router.delete('/api/delete_question', question_controller.delete_question);

module.exports = router;