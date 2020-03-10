const router = require("express").Router();
const admin = require("./verifyAdmin")
const Action = require("../models/actionSchema");
const Reaction = require("../models/reactionSchema");

router.post("/action", admin, (req, res) => {
    Action.findOne({service: req.body.service, name: req.body.name}, function (err, action) {
        if (err) {
            console.log(err);
            return res.status(400).send(err);
        }
        else if (action) {
            return res.status(201).send("Existing");
        }
        else {
            action = new Action({
                service: req.body.service,
                name: req.body.name
            })
            try {
                action.save();
                res.send("Succes");
            } catch (error) {
                console.log(error);
                return res.status(401).send(error);
            }
        }
    })
})

router.post("/reaction", admin, (req, res) => {
    Reaction.findOne({service: req.body.service, name: req.body.name}, function (err, action) {
        if (err) {
            console.log(err);
            return res.status(400).send(err);
        }
        else if (action) {
            return res.status(201).send("Existing");
        }
        else {
            action = new Action({
                service: req.body.service,
                name: req.body.name
            })
            try {
                action.save();
                res.send("Succes");
            } catch (error) {
                console.log(error);
                return res.status(401).send(error);
            }
        }
    })
})

module.exports = router;