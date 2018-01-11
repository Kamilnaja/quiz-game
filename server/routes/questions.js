var express = require('express');
var router = express.Router();

var question_controller = require('../controllers/questionsController');

// Questions Routes

router.get('/', question_controller.index);