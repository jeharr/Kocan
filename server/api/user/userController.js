var User = require('./userModel');


exports.params = function(req, res, next, id){
  res.json('test user params')
};

exports.get = function(req, res, next){
  res.json('test user get');
};

exports.post = function(req, res, next){
  res.json('test user post')
};

exports.getUser = function(req, res, next){
  res.json('test getUser')
};

exports.put = function(req, res, next){
  res.json('test user put')
};

exports.delete = function(req, res, next){
  res.json('test user delete')
};

