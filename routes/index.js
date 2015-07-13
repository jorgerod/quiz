var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: "Quiz", text1: 'Bienvenido a QUIZ', text2: "El portal donde podrá crear sus propios juegos!" });
});

module.exports = router;
