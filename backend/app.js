const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const knex = require('knex');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const prayerRouter = require('./routes/prayer');
const typeRouter = require('./routes/type');
const organizationRouter = require('./routes/organization');
const adminRouter = require('./routes/admin');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.set('view engine', 'pug');  

app.use('/', indexRouter);
app.use('/u', usersRouter);
app.use('/prayers', prayerRouter);
app.use('/type', typeRouter);
app.use('/org', organizationRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(404).send('404 error Something broke');
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
