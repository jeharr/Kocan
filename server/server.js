var express = require('express');
var apiRouter = require('./api/api')
var authRouter = require('./auth/authRouter')
var app = express();

require('./config/middleware')(app);

app.use('/api', apiRouter);
app.use('/auth', authRouter);

app.use(function(){
  console.log('end of the stack')
  res.send("done");
})

module.exports = app;

