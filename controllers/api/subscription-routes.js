const date = new Date();
const addTime = require('add-time');
const router = require('express').Router();
const { Subscription } = require('../../models')


router.post('/', async (req, res) => {
    try {
        const time = addTime(date, {
            days: 30
        })

        const timeString = time.toLocaleDateString('en-us', { year:'numeric', month: 'long', day:'numeric' })

        console.log(typeof timeString);
        console.log(timeString);

        const dbUserData = await Subscription.create({
            subname: req.body.subname,
            description: req.body.description,
            link: req.body.link,
            payment: req.body.payment,
            renew: timeString,
            user_id: req.session.user_id
        });
        console.log(req.session.user_id);
        res.status(200).json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router