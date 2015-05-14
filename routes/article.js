/**
 * Created by Administrator on 15-4-18..
 */
var express = require('express');
var router = express.Router();
//var User = require('../modules/user');

//var user = new User;

//router.use(user.checkLogin);

router.get('/', function(req, res, next){
    res.send('article routes!');
});

router.get('/user', function(req, res, next){
    res.send('article user!');
});

module.exports = router;