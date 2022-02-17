const router = require('express').Router();
const { Subscription } = require('../../models')


router.post('/', async (req, res) => {
    try {
        const dbUserData = await Subscription.create({
            subname: req.body.subname,
            description: req.body.description,
            link: req.body.link,
            cycle: req.body.cycle,
            date: req.body.date,
            payment: req.body.payment,
            remind: req.body.remind,
            user_id: req.session.user_id
        })
        console.log(req.session.user_id);
        res.status(200).json(dbUserData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
})

module.exports = router