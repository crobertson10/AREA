const router = require("express").Router();
const verify = require("../routes/verifyToken");
const jwt = require("jsonwebtoken");
const Registered = require("../models/registeredschema");
const Action = require("../models/actionSchema");
const Reaction = require("../models/reactionSchema");
const Zap = require("../models/zapSchema");
const Data = require("../models/messageSchema");
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
    if (req.body.data2) {
        options = {
            userId: verified._id,
            serviceA: req.body.serviceA,
            nameA: req.body.nameA,
            serviceR: req.body.serviceR,
            nameR: req.body.nameR,
            data2: req.body.data2
        }
    }
    Zap.findOne(options, async function (err, zap) {
        if (err) {
            console.log("error save.js line 23");
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
                console.log("error save.js line 34");
                return res.status(401).send(error);
            }
            let action = await Action.findOne({service: req.body.serviceA, name: req.body.nameA});
            if (!action) {
                console.log("error save.js line 39");
                return res.status(400).send("Error");
            }
            let service = await Registered.findOne({userId: verified._id, name: req.body.serviceA});
            console.log(req.body);

            let mydata = {
                token: service.token,
                userId: verified._id,
                zapId: zap._id
            };
            if (req.body.data1) {
                mydata = {
                    token: service.token,
                    userId: verified._id,
                    zapId: zap._id,
                    data1: req.body.data1
                }
            }
            
            await axios({
                method: 'post',
                url: `http://localhost:8080${action.start}`,
                data: mydata
            }).then((resp) => {
                console.log(resp.data);
                return res.send("success");
            }).catch((error) => {
                console.log("Error save.js line 58");
                return res.status(400).send("error");
            })
        }
    })
})

router.post("/delete", verify, (req, res) => {
    const authToken = req.body.authToken;
    const verified = jwt.verify(authToken, process.env.TOKEN_SECRET);
    let zapId = req.body.zapId
    
    Data.deleteOne({zapId: zapId}, function (err) {
        if (err) {
            console.log(err);
            return res.status(400).send(err);
        }
    })

    Zap.deleteOne({_id: zapId}, function (err) {
        if (err) {
            console.log(err);
            return res.status(400).send(err);
        } else {
            res.send("Deleted");
        }
    })
})

module.exports = router;