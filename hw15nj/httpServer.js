const express = require('express');
const server = express();
const port = 3000;
const indexRouter = require('./routes/index');
const  shippingRouter = require('./routes/shipping');
const  testRouter = require('./routes/test');
const  usersRouter = require('./routes/users');
//connect static files
server.use(express.static('public'));
server.use('/css',express.static(__dirname + 'public/css'))
server.use('/js',express.static(__dirname + 'public/js'))

/**
/*

server.use('/img',express.static(__dirname + 'public/img'))

server.set('views',path.join(__dirname,'views'));*/
server.set('views engine','ejs');

server.get('',(req, res)=>{res.sendFile(__dirname + '/views/cart.html')})
server.get('/shipping', function(req, res) {
   // res.sendFile(__dirname + "/views/shipping.html");
  });
  
//server.get('/shipping',(req, res)=>{res.sendFile(__dirname + '/views/shipping.html')})
server.use('/user',usersRouter);
server.use('/shipment',shippingRouter);
server.use('/test',testRouter);
//
/*
server.use('/',indexRouter);
server.use('/users',usersRouter)
*/
//Listen on port
server.listen(port, console.log(`Listen on port${port}`));

module.exports = server;