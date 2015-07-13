
exports.question = function (req, res, next) {
	res.render('quizes/question', {question: 'Capital de Italia?'});
};

exports.answer = function (req, res, next) {
	if (req.query.answer === 'Roma') {
		res.render('quizes/answer', {answer: 'Correcto'});
	} else {
		res.render('quizes/answer', {answer: 'Incorrecto'});
	}
};