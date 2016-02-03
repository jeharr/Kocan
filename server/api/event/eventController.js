var Event = require('./eventModel');


exports.params = function(req, res, next, id){
  res.json('test event params')
};

exports.get = function(req, res, next){
  res.json('test event get');
};

exports.post = function(req, res, next){
  Event.create(req.body)
    .then(event){
      res.json(event);
    }
};

exports.getEvent = function(req, res, next){
  res.json('test getEvent')
};

exports.put = function(req, res, next){
  res.json('test event put')
};

exports.delete = function(req, res, next){
  res.json('test event delete')
};

