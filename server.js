var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose   = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true  }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//var connection = mongoose.connect('mongodb://localhost:27017/abhivaad');
var connection = mongoose.connect('mongodb://sushant_jadhav:$ush@nt1993@ds017432.mlab.com:17432/abhivaad');
//var connection = mongoose.createConnection('mongodb://local
// host:27017/abhivaad');
autoIncrement.initialize(connection);
var port = process.env.PORT || 3000;

var users = require('./routes/user')(app);
var question = require('./routes/question')(app);
var answer = require('./routes/answer')(app);
var tag = require('./routes/tag')(app);
var stories = require('./routes/stories')(app);
var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {

    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});
// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.post('/', function(req, res) {
    var user = new User();
        user.name = req.body.name;
        user.email = req.body.email;
        user.password = req.body.password;
        console.log(user);
    res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;

  next(err);
});

app.listen(port);
console.log('Magic happens on port ' + port);
// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}
// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
