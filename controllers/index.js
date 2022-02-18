// Sets up router and paths
const router = require('express').Router();
const homeRoutes = require("./homeRoutes");
const apiRoutes = require('./api');

// Creates paths
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;