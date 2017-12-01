var express = require('express');
var router = express.Router();

var repositoryModel = require('../../../models/repository.model');

var postingModel = require('../../../models/posting.model');

/*
	GET

	Load posting.
*/
router.get('/:idx/:postingNum', function(req, res, next) {
  console.log('Load posting');
  var idx = req.params.idx;
  var postingNum = req.params.postingNum;

  postingModel.loadAllPosting(idx, postingNum, function(error, resultObject){
    res.json(resultObject);
  });
});


/*
	POST

	Create posting.
*/
router.post('/', function(req, res, next) {
  repositoryModel.uploadImage(req, function(error, resultObject){
    res.json(resultObject);
  });
});

/*
	PUT

	Update posting.
*/
router.put('/', function(req, res, next) {

});


/*
	DELETE

	Delete posting.
*/
router.delete('/', function(req, res, next) {
  var postingId = req.params.postingId;

  postingModel.removePosting(postingId, function(error, resultObject){
    res.json(resultObject);
  });
});


module.exports = router;