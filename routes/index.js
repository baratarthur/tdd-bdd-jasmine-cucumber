var express = require('express');
var router = express.Router();
const Cliente = require('../models/Cliente');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', clientes: Cliente.todos() });
});

module.exports = router;
