var router = require('express').Router();
var controller = require('./eventController');

router.param('id', controller.params);

router.route('/')
  .get(controller.get)
  .post(controller.post)

router.route('/:id')
  .get(controller.getEvent)
  .put(controller.put)
  .delete(controller.delete)

module.exports = router;
