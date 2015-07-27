var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Quiz", text2: "El portal donde podrá crear sus propios juegos!" });
});

// Autoload de comandos :quizId
router.param("quizId", quizController.load);

//Definicion de rutas
router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
router.get('/quizes/:quizId(\\d+)', quizController.show);

router.get('/author', function (req, res, next) {
	res.render('author.ejs', {author: "Jorge Rodriguez Martin"});
});

module.exports = router;
