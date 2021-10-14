var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
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

module.exports = app;
