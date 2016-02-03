var express = require('express');
var apiRouter = require('./api/api');
var authRouter = require('./auth/authRouter');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('mongodb://localhost/kocan');
require('./config/middleware')(app);

app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.use(function(){
  console.log('end of the stack');
  res.send("done");
})

module.exports = app;

