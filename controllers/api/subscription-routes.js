// Creates router and models
const router = require('express').Router();
const { Subscription } = require('../../models')

// Used to create the renewal date for the time
const date = new Date();
const addTime = require('add-time');

// Adds new subscription to databsae
router.post('/', async (req, res) => {
    try {
        // Takes current time and adds 30 days to it (typical subscription renews every 30 days)
        const time = addTime(date, {
            days: 30
        })

        // Converts time to a string with legible format
        const timeString = time.toLocaleDateString('en-us', { year:'numeric', month: 'long', day:'numeric' })

        // Creates new subscription
        const dbUserData = await Subscription.create({
            subname: req.body.subname,
            description: req.body.description,
            link: req.body.link,
            payment: req.body.payment,
            renew: timeString,
            user_id: req.session.user_id
        });
        
        res.status(200).json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router