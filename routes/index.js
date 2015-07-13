var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Quiz", text1: 'Bienvenido a QUIZ', text2: "El portal donde podrá crear sus propios juegos!" });
});

router.get('/quizes/answer', quizController.answer);
router.get('/quizes/question', quizController.question);

module.exports = router;
