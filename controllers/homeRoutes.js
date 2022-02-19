const router = require('express').Router();
const { Subscription, User } = require('../models');
const withAuth = require('../utils/helpers');

// Home propmts login page
router.get('/', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    } 
})

// Renders Signup handlebars
router.get('/signup', async (req, res) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
})

// Loads dashboard
router.get('/dashboard', withAuth, async (req, res) => {
    try {
        // Creates array with all subscriptions for user that is signed in
        const subscriptionData = await Subscription.findAll({
            where: {
                user_id: req.session.user_id
            }
        })

        const subsData = subscriptionData.map((project) => project.get({ plain: true }));
        
        //  Dashboard is created with new array of subscriptions
        res.render('dashboard', {subsData});

    } catch (err) {
        res.status(500).json(err);
    }
})

// Renders page to add a subscription
router.get('/add', withAuth, async (req, res) => {
    try {
        res.render('addsubscription');
    } catch (err) {

        res.status(500).json(err);
    }
})

module.exports = router;