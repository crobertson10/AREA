const router = require("express").Router();
const verify = require("../routes/verifyToken");
const jwt = require("jsonwebtoken");
const Registered = require("../models/registeredschema");
const Action = require("../models/actionSchema");
const Reaction = require("../models/reactionSchema");
const Zap = require("../models/zapSchema");

router.post("/save", verify, (req, res) => {
    const authToken = req.body.authToken;
    const verified = jwt.verify(authToken, process.env.TOKEN_SECRET);
    var options = {
        userId: verified._id,
        serviceA: req.body.serviceA,
        nameA: req.body.nameA,
        serviceR: req.body.serviceR,
        nameR: req.body.nameR
    }
    Zap.findOne(options, function (err, zap) {
        if (err) {
            console.log(err);
            return res.status(400).send(err);
        }
        else if (zap) {
            return res.status(201).send("Existing");
        }
        else {
            zap = new Zap(options)
            try {
                zap.save();
                console.log(zap);
                res.send(zap);
            } catch (error) {
                console.log(error);
                return res.status(401).send(error);
            }
        }
    })
})

router.post("/delete", verify, (req, res) => {
    const authToken = req.body.authToken;
    const verified = jwt.verify(authToken, process.env.TOKEN_SECRET);
    var options = {
        userId: verified._id,
        serviceA: req.body.serviceA,
        nameA: req.body.nameA,
        serviceR: req.body.serviceR,
        nameR: req.body.nameR
    }
    Zap.deleteOne(options, function (err) {
        if (err) {
            console.log(err);
            return res.status(400).send(err);
        }
        res.send("Deleted");
    })
})

module.exports = router;