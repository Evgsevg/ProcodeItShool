var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/test', function(req, res, next) {
  console.log('session:',req.session);
  if(!req.session.hren)
  {
    req.session.hren =0;
    req.session.hren2 =2;
  }
  req.session.hren++;
  res.json({
    status:'ok',hren:req.session.hren
  });
  
  res.render('index', { title: 'Express' });
});
module.exports = router;
