var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mc=require("mongodb").MongoClient
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminApi=require('./routes/admin')

var app = express();
 dburl="mongodb+srv://mock:mock@nandakishor.gzlym.mongodb.net/mockdata?retryWrites=true&w=majority"

mc.connect(dburl,{useUnifiedTopology:true,useNewUrlParser:true},(err,client)=>{

if(err){
  console.log('error in connection',err)

}
else{
  console.log('database connected')
  const dbObj=client.db('mockdata')
  app.set('databaseObject',dbObj)
}

})

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/admin',adminApi)

app.use('/', indexRouter);
app.use('/users', usersRouter);

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
