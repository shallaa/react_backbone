var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(express.static('public'));
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));
app.use(morgan('dev'));

app.all('*', function(req, res, next) {
  res.header('Cache-Control', 'no-cache');
  next();
});

var server = app.listen(process.env.PORT || 3000, function() {
  console.log('server listening on %d', server.address().port);
});