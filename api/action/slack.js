const router = require('express').Router();
const axios = require('axios');
const Registered = require('../models/registeredschema');
const Message = require('../models/messageSchema');


router.get('/slack/check/message/create', (req, res) => {
    var token = req.body.token;
    var userId = req.body.userId;
    var zapId = req.body.zapId;
    Message.findOne({ userId: userId, zapId: zapId}, function (err, message) {
        if (err) {
            console.log(err);
            return res.status(400).send("Error");
        }
        if (!err && !message) {
            return res.status(401).send("Error");
        }
        
        axios({
            method: 'get',
            url: `https://slack.com/api/channels.history`,
            params: {
                token: `${token}`,
                channel: message.id,
                inclusive: false,
                count: 100,
                oldest: message.date
            },
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(resp => {
            let messs = resp.data.messages;
            let copy = {};
            messs = messs.reverse();
            if (messs.length == 0) {
                return res.status(201).send("Nothing to do");
            }
            else {
                let done = false;
                messs.forEach(element => {
                    let string = element.text.split(" ");
                    copy = element;
                    console.log(string);
                    if (string.length === 2 && string[0] === "Create") {
                        message.date = element.ts;
                        try {
                            message.save();
                            done = true;
                            let data = {
                                data1: string[1]
                            }
                            return res.status(200).send(data)
                        } catch (error) {
                            console.log(error);
                            return res.status(412).send("Erroor")
                        }
                    }
                });
                if (done === false) {
                    message.date = copy.ts;
                    try {
                        message.save();
                        return res.status(201).send("Nothing to do");
                    } catch (error) {
                        return res.status(412).send("Error");
                    }    
                }
            }
        }).catch(error => {
            console.log(error);
            return res.status(402).send("Error");
        })
    });
});

router.get('/slack/check/message/invit', (req, res) => {
    var token = req.body.token;
    var userId = req.body.userId;
    var zapId = req.body.zapId;
    Message.findOne({ userId: userId, zapId: zapId}, function (err, message) {
        if (err) {
            console.log(err);
            return res.status(400).send("Error");
        }
        if (!err && !message) {
            return res.status(401).send("Error");
        }
        
        axios({
            method: 'get',
            url: `https://slack.com/api/channels.history`,
            params: {
                token: `${token}`,
                channel: message.id,
                inclusive: false,
                count: 100,
                oldest: message.date
            },
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(resp => {
            let messs = resp.data.messages;
            let copy = {};
            messs = messs.reverse();
            if (messs.length == 0) {
                return res.status(201).send("Nothing to do");
            }
            else {
                let done = false;
                messs.forEach(element => {
                    let string = element.text.split(" ");
                    copy = element;
                    console.log(string);
                    if (string.length === 2 && string[0] === "Invite") {
                        message.date = element.ts;
                        try {
                            message.save();
                            done = true;
                            let data = {
                                data1: string[1],
                                data2: string[2]
                            }
                            return res.status(200).send(data)
                        } catch (error) {
                            console.log(error);
                            return res.status(412).send("Erroor")
                        }
                    }
                });
                if (done === false) {
                    message.date = copy.ts;
                    try {
                        message.save();
                        return res.status(201).send("Nothing to do");
                    } catch (error) {
                        return res.status(412).send("Error");
                    }    
                }
            }
        }).catch(error => {
            console.log(error);
            return res.status(402).send("Error");
        })
    });
});

router.post('/slack/init/message', (req, res) => {
    let token = req.body.token;
    axios({
        method: 'post',
        url: `https://slack.com/api/conversations.list`,
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then((resp)=> {
        let bool = false;
        let channels = resp.data.channels;
        channels.forEach(element => {
            if (element.name === req.body.data1) {
                bool = true;
                let channelId = element.id;
                axios({
                    method: 'get',
                    url: `https://slack.com/api/channels.history`,
                    params: {
                        token: `${token}`,
                        channel: channelId,
                        count: 1
                    },
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                })
                .then((resp) => {
                    let arr = resp.data.messages[0];
                    console.log(arr);
                    let message = new Message({
                        userId: req.body.userId,
                        zapId: req.body.zapId,
                        name: req.body.data1,
                        date: arr.ts,
                        id: channelId
                    })
                    try {
                        message.save();
                        res.send(`Success`);
                    } catch (error) {
                        res.status(400).send("ERROR");
                    }
                })
                .catch((err) => {
                    console.log(err);
                    res.status(400).send("Error 2")
                })
            }
        });
        if (bool === false) {
            res.send("channel does not exist");
        }    
    }).catch((err) => {
        console.log(err);
        res.status(400).send("Error 1")
    })

})

module.exports = router