const path = require('path');
const express = require('express');
//app = express().use(express.static(__dirname + '/')),

const mainRoutes = require('./routes/main.js');
const blogRoutes = require('./routes/blog.js');
const testRoutes = require('./routes/test.js');
/*
app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});
*/
const server = express();
//view engine setup
server.set('views', path.join(__dirname,'views'));
server.set('view engine', 'ejs');

server.use(express.static(path.join(__dirname,'public')));

//rotesmidlware
server.use('/', mainRoutes);
server.use('/blog',blogRoutes);
server.use('/test',testRoutes);

server.listen(8084);