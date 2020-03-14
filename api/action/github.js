const router = require("express").Router();
const verify = require("../routes/verifyToken");
const jwt = require("jsonwebtoken");
const Registered = require("../models/registeredschema");
const Action = require("../models/actionSchema");
const Reaction = require("../models/reactionSchema");
const Zap = require("../models/zapSchema");
const axios = require("axios");
const Data = require("../models/messageSchema");

router.post("/github/repo/init", (req, res) => {
    let token = req.body.token;
    axios({
        method: "get",
        url: "https://api.github.com/user/repos",
        headers: {
            "Authorization": `token ${token}`
        },
        params: {
            "affiliation": "owner",
            "sort": "created"
        }
    }).then(resp => {
        let repo = resp.data[0];
        let data = {};
        if (!repo) {
            data = new Data({
                userId: req.body.userId,
                zapId: req.body.zapId,
                name: "NA",
                date: "2019-11-29T10:40:26Z",
                id: "NA"
            })
        } else {
            data = new Data({
                userId: req.body.userId,
                zapId: req.body.zapId,
                name: "NA",
                date: repo.created_at,
                id: "NA"
            })    
        }
        console.log(data);
        try {
            data.save();
            return res.send("okoko");
        } catch (error) {
            console.log(error);
            return res.satatus(400).send("Error");
        }
    }).catch(err => {
        console.log(err);
        return res.satatus(400).send("Error");
    })
})

router.post("/github/repo/created", (req, res) => {
    let token = req.body.token;
    axios({
        method: "get",
        url: "https://api.github.com/user/repos",
        headers: {
            "Authorization": `token ${token}`
        },
        params: {
            "affiliation": "owner",
            "sort": "created"
        }
    }).then(async resp => {
        let done = false;
        let repo = resp.data;
        repo = repo.reverse();
        let save = {};
        let data = await Data.findOne({zapId: req.body.zapId})
        if (!data) {
            return (res.status(401).send("no data"));
        } else {
            repo.forEach(element => {
                save = element;
                if (data.date < element.created_at) {
                    done = true;
                    data.date = element.created_at;
                    try {
                        data.save();
                        let tosend = {
                            data1: element.name,
                            message: `My new repo is named ${element.name}`
                        }
                        return res.send(tosend);
                    } catch (error) {
                        console.log(error);
                        return res.status(400).send("ERROR");
                    }
                }
            });
        }
        if (done === false) {
            data.date = save.created_at;
            try {
                data.save();
                return res.status(201).send("Nothing to do");
            } catch (error) {
                console.log(error);
                return res.status(400).send("ERROR")
            }
            }
    }).catch(err => {
        console.log(err);
        return res.satatus(400).send("Error");
    })
})

module.exports = router;
