const express= require('express');
const bodyParser = require('body-parser');
const path = require('path');
const uploudsPath="./uploads/image.png"
const PORT = process.env.PORT|| 8084;
const urlencoderParser = bodyParser.urlencoded({extended:false});
express()

.use(express.static(path.join(__dirname,'public')))
.set('views',path.join(__dirname,'views'))

.set('view engine','ejs')
.get('/',(req,res)=>res.render('pages/index'))
.get('/about',function(req,res){
    res.render('about');
})
.post('/',(req,res)=>res.render('pages/about'))
.post('/body',urlencoderParser,function(req,res){
    if(!req.body) return res.sendStatus(400)
    console.log(req.body);
    res.render('about',{data:req.body});
})
//.get('/',(req,res)=>res.render('public/uplouds'))
.get("/",express.static(path.join(__dirname,"./public")))
.get("./image.png",(req,res)=>
{
    res.sendFile(path.join(__dirname,uploudsPath))
})
.listen(PORT,()=>console.log(`Listen on:${PORT}`))