var express = require('express');
var router = express.Router();

/*
  GET

  info page
*/
router.get('/', function(req, res, next) {
  var resultObject = new Object({});

  res.render('user/info');
});

module.exports = router;
