var express = require('express');
var router = express.Router();
var multer = require('multer');

var midMulter = multer({dest:'../uploads'});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/formdata/upload', midMulter, function(req, res, next){
   console.log(req.body);
    res.json({})
});

router.post('/upload/drag', midMulter, function(req, res, next){
    console.log(req.body);
    console.log(req.files);
    res.json({})
});

module.exports = router;
