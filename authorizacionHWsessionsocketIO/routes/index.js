var express = require('express');
var router = express.Router();
/*
 * GET home page.
 */

exports.index = function(req, res){
  if (req.method == 'POST') {
    req.session['name'] = req.body.name;
  }
  res.render('index', { title: 'Authorizacion' });
};
/* GET home page. 
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express123' });
  res.render('index', {title: 'Home',someInfo: "Данные для передачи"});
});*/

router.get('/test',(req,res,next)=>{
  res.render('test', {title: 'Test',someInfo: "Данные для передачи"});
});
router.get('/auth',(req,res,next)=>{
  res.render('auth', {title: 'Test',someInfo: "Данные для передачи"});
});
router.get('/reg',(req,res,next)=>{
  res.render('reg', {title: 'Test',someInfo: "Данные для передачи"});
});
router.get('/profile',(req,res,next)=>{
  res.render('profile', {title: 'Profile',someInfo: "Данные для передачи"});
});
module.exports = router;
