var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/fd.ac', function(req, res, next){
   console.log(req.body);
   console.log(req.params);
    res.json({})
});

module.exports = router;
