const router = require('express').Router();
const { Subscription, User } = require('../models');
const withAuth = require('../utils/helpers');

router.get('/', async (req, res) => {
    try {
        res.render('login');
    } catch (err) {
        res.status(500).json(err);
    } 
})

router.get('/signup', async (req, res) => {
    try {
        res.render('signup');
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const subscriptionData = await Subscription.findAll({
            where: {
                user_id: req.session.user_id
            }
        })

        const subsData = subscriptionData.map((project) => project.get({ plain: true }));

        res.render('dashboard', {subsData});

    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/add', withAuth, async (req, res) => {
    try {

        res.render('addSubscription');
    } catch (err) {

        res.status(500).json(err);
    }
})

module.exports = router;