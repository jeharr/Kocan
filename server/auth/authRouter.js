var router = require('express').Router();
var controller = require('./authController');

router.route('/')
  .get(controller.get)
  .post(controller.post)

module.exports = router;
