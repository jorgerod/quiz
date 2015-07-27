
var models = require('../models/models.js');


exports.index = function (req, res) {
	models.Quiz.findAll().then(function (quizes) {
		res.render('quizes/index.ejs', {quizes: quizes});
	});
};

exports.show = function (req, res, next) {
	models.Quiz.findOne(req.params.quizId).then(function (quiz) {
		res.render('quizes/show', {quiz: quiz});
	});
};

exports.answer = function (req, res, next) {
	models.Quiz.findOne(req.params.quizId).then(function (quiz) {
		if (req.query.answer === quiz.answer) {
			res.render('quizes/answer', {quiz: quiz, answer: 'Correcto'});
		} else {
			res.render('quizes/answer', {quiz: quiz, answer: 'Incorrecto'});
		}
	});

	
};