var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fosterDogRouter = require('./routes/fosterdogs');
var dogBreedsRouter = require('./routes/dog_breeds');
var dogServicessRouter = require('./routes/dog_services');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var mongoose = require('mongoose')
var MongoStore = require('connect-mongo')(session);
var app = express();
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: __dirname + '/.env' });
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'media')));

app.use(cookieParser());

// initialize express-session to allow us track the logged-in user across sessions.
app.use(session({
  key: 'user_sid',
  secret: 'Dungens',
  resave: false,
  saveUninitialized: false,
  cookie: {
    expires: 24 * 600000
  },
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/foster-dogs', fosterDogRouter);
app.use('/dog-breeds', dogBreedsRouter);
app.use('/dog-services', dogServicessRouter);




// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// initialize cookie-parser to allow us access the cookies stored in the browser. 


// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
