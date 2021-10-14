const express = require('express');
const isAuthMw= require('./mw/isAuth.js');
const router = express.Router();

router.all('/*',isAuthMw);

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    res.render('index', {title: 'Home',someInfo: "Данные для передачи"});
});
router.get('/one', isAuthMw,(req, res)=> {
   res.json({status:'ok',payload:{page:'one'}});
});
   router.get('/two', isAuthMw,(req, res)=> {
        res.json({status:'ok',payload:{page:'two'}});
        });
        router.get('/three', isAuthMw,(req, res)=> {
            res.json({status:'ok',payload:{page:'three'}});
            });

module.exports = router;
