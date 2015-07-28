
var models = require('../models/models.js');

exports.load = function (req, res, next, quizId) {
	models.Quiz.findOne(Number(quizId)).then(function (quiz) {
		if (quiz) {
			req.quiz = quiz;
			next();
		} else {
			next(new Error("No existe quizId=" + quizId));
		}
	}).catch(function(error) { next(error);});
};

exports.index = function (req, res) {
	var param = "%";

	if (req.query.search) {
		param += req.query.search.replace(" ", '%');
	}

	models.Quiz.findAll({where: ["pregunta like ?",  param + '%']}).then(function (quizes) {
		res.render('quizes/index.ejs', {quizes: quizes});
	}).catch(function(error) { next(error);});
};

exports.show = function (req, res) {
	models.Quiz.findOne(req.params.quizId).then(function (quiz) {
		res.render('quizes/show', {quiz: req.quiz});
	});
};

exports.answer = function (req, res) {
	var resultado = "Incorrecto";
	if (req.query.answer === req.quiz.respuesta) {
		resultado = "Correcto"
	}

	res.render('quizes/answer', {quiz: req.quiz, answer: resultado});
	
};