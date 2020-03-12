const router = require("express").Router();
const verify = require("../routes/verifyToken");
const jwt = require("jsonwebtoken");
const Registered = require("../models/registeredschema");
const Action = require("../models/actionSchema");
const Reaction = require("../models/reactionSchema");
const Zap = require("../models/zapSchema");
const axios = require("axios");

router.post("/save", verify, async (req, res) => {
    const authToken = req.body.authToken;
    const verified = jwt.verify(authToken, process.env.TOKEN_SECRET);
    var options = {
        userId: verified._id,
        serviceA: req.body.serviceA,
        nameA: req.body.nameA,
        serviceR: req.body.serviceR,
        nameR: req.body.nameR
    }
    Zap.findOne(options, async function (err, zap) {
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
            } catch (error) {
                return res.status(401).send(error);
            }
            let action = await Action.findOne({service: req.body.serviceA, name: req.body.nameA});
            if (!action) {
                return res.status(400).send("Error");
            }                
            let service = await Registered.findOne({userId: verified._id, name: req.body.serviceA});
            console.log(service.token);
            await axios({
                method: 'post',
                url: `http://localhost:8080${action.start}`,
                data: {
                    token: service.token,
                    userId: verified._id,
                    zapId: zap._id,
                    data1: req.body.data1
                }
            }).then((resp) => {
                console.log("okoko");
                
                return res.send("success");
            }).catch((error) => {
                console.log(error);
                return res.status(400).send("error");
            })
        }
    })
})

router.post("/delete", verify, (req, res) => {
    const authToken = req.body.authToken;
    const verified = jwt.verify(authToken, process.env.TOKEN_SECRET);
    let zapId = req.body.zapId
    Zap.deleteOne({_id: zapId}, function (err) {
        if (err) {
            console.log(err);
            return res.status(400).send(err);
        }
        res.send("Deleted");
    })
})

module.exports = router;