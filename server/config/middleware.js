var morgan = require('morgan');
var bodyParser = require('body-parser');

module.exports = function(app) {
  app.use(morgan('combined'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  //app.use(express.static(__dirname + 'client'));
};
