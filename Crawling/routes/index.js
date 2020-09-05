var express = require('express');
var router = express.Router();
const request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//router.use('/ssu',require('./ssu'));
//router.use('/duksung.js', require('./duksung'));
router.use('/hong.js', require('./hong'));
module.exports = router;
