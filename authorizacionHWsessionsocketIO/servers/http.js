var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const path = require('path'),
const mongoose = require('mongoose');
const DB=mongoose.connection;
 const socketio = require('socket.io'), 
  const MongoSessionStore = require('express-session-mongo'),
   const cookie = require('cookie') ,
   

 const session_storage = new MongoSessionStore(DB);
//var session = require('express-session');
//var MongoStore = require('connect-mongo');

const indexRouter = require('../routes/index');
const usersRouter = require('../routes/users');
const adminRouter = require('../routes/admin');
const testsRouter = require('../routes/tests');
const authRouter = require('../routes/auth');
const profileRouter = require('../routes/profile');
//var chatRouter = require('../routes/chat');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.cookieParser('KHjLxmkFB3VyKkPSmaLnUB75vA4aZDAF'));
  app.use(express.session({
    store: session_storage,
    secret: 'KHjLxmkFB3VyKkPSmaLnUB75vA4aZDAF',
    key: 'sid'
  }));
  app.use(function(req, res, next) {
    res.locals.session = req.session;
    next();
  });
/*
app.use(session({
  secret: 'poijklmnb',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/session',
  })
}));
*/
app.use('/', indexRouter);
app.use('/users', usersRouter);
/**/
app.use('/admin', adminRouter);
app.use('/tests', testsRouter);
app.use('/auth', authRouter);
app.use('/profile', profileRouter)
//app.use('/chat', chatRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//connect session
const io = socketio.listen(server);

io.configure(function() {
  io.set('authorization', function (data, accept) {
    if (!data.headers.cookie) 
      return accept('No cookie transmitted.', false);

    data.cookie = cookie.parse(data.headers.cookie);
    
    let sid = data.cookie['sid'];
    
    if (!sid) {
      accept(null, false);
    }

    sid = sid.substr(2).split('.');
    sid = sid[0];
    data.sessionID = sid;

    data.getSession = function(cb) {
      session_storage.get(sid, function(err, session) {
        if (err || !session) {
          console.log(err);
          accept(err, false);
          return;
        }
        cb(err, session);
      });
    }
    accept(null, true);
  });
});
//usage
io.sockets.on('connection', function(socket) {
  socket.join('auth');

  socket.on('message', function(data) {
    socket.handshake.getSession(function(err, session) {
      data['user'] = session.name || 'guest';
      io.sockets.in('auth').emit('message', data);
    });
  });
});
module.exports = app;
