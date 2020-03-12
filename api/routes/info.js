const router = require("express").Router();
const verify = require("./verifyToken");
const jwt = require("jsonwebtoken");
const Registered = require("../models/registeredschema");
const Message = require("../models/messageSchema");
const Action = require("../models/actionSchema");
const Reaction = require("../models/reactionSchema");
const Zap = require("../models/zapSchema");

router.post("/services", verify, (req, res) => {
  const authToken = req.body.authToken;
  const verified = jwt.verify(authToken, process.env.TOKEN_SECRET);
  Registered.find({ userId: verified._id }, function(err, docs) {
    if (err) {
      return res.status(400).send(err);
    }
    var array = []
    docs.forEach(element => {      
      array.push(element.name);
    });
    res.send(array);
  });
});

router.post("/actions", verify, (req, res) => {
  Action.find({ service: req.body.service }, function(err, docs) {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
    var array = []
    docs.forEach(element => {      
      array.push(element.name);
    });
    res.send(array);
  });
});

router.post("/reactions", verify, (req, res) => {
  var options = {
    actionService: req.body.actionService,
    actionName: req.body.actionName,
    service: req.body.service
  }
  Reaction.find(options, function(err, docs) {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
    var array = []
    docs.forEach(element => {      
      array.push(element.name);
    });
    res.send(array);
  });
});

router.get("/messages", verify, (req, res) => {
  Message.find({}, (err, messages) => {
    if (err) {
      console.log(err);
      return res.status(400).send("error");
    }
    res.send(messages);
  })
})

router.post("/zaps", verify, (req, res) => {
  const authToken = req.body.authToken;
  const verified = jwt.verify(authToken, process.env.TOKEN_SECRET);
  Zap.find({userId: verified._id}, function (err, docs) {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
    if (!docs) {
      res.send([]);
    }
    res.send(docs);
  })
})

module.exports = router;
