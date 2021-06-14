const express = require('express'),
router= express.Router()
router.get('/',(req,res)=>{res.render('pages/index',{title:'Home page'})})
//запрет показа новостей
router.get('/about',(req,res)=>{res.render('pages/about',{title:'About page',showNews:false})})