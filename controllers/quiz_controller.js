
var models = require('../models/models.js');

exports.question = function (req, res, next) {
	models.Quiz.findAll().then(function (quiz) {
		res.render('quizes/question', {question: quiz[0].pregunta});
	});
};

exports.answer = function (req, res, next) {
	models.Quiz.findAll().then(function (quiz) {
		if (req.query.answer === quiz[0].respuesta) {
			res.render('quizes/answer', {answer: 'Correcto'});
		} else {
			res.render('quizes/answer', {answer: 'Incorrecto'});
		}
	});

	
};