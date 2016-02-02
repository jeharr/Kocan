var router = require('express').Router();

router.use('/users', require('./user/userRoutes'));
router.use('/events', require('./event/eventRoutes'));
router.use('/supplies', require('./supply/supplyRoutes'));

module.exports = router;
