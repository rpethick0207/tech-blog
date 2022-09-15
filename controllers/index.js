const router = require('express').Router();

const apiRoutes = require('./api');
const homepageRoutes = require('./homepage-routes');
const dashboard = require('./dashboard-routes');

router.use('/', homepageRoutes);
router.use('/dashboard-routes',dashboard );
router.use('/api', apiRoutes);

module.exports = router;
