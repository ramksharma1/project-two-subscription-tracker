const router = require('express').Router();
const { Subscription, User } = require('../models');

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

router.get('/dashboard', async (req, res) => {
    try {
        const subscriptionData = await Subscription.findAll({
            where: {
                user_id: req.session.user_id
            }
        })

        const subsData = subscriptionData.map((project) => project.get({ plain: true }));

        if (req.session.loggedIn) {
            res.render('dashboard', {subsData});
        } else {
            res.render('dashboard', {subsData});
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

router.get('/add', async (req, res) => {
    try {
        if (req.session.loggedIn) {
            res.render('addSubscription');
        } else {
            res.render('addSubscription');
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;