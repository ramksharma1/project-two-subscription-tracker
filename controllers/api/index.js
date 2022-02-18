// Sets up router and paths
const router = require('express').Router();
const userRoutes = require('./user-routes');
const subscriptionRoutes = require('./subscription-routes')

// Creates paths
router.use('/users', userRoutes);
router.use('/subscriptions', subscriptionRoutes)

module.exports = router;