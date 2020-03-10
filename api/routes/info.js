const router = require("express").Router();
const verify = require("./verifyToken");
const jwt = require("jsonwebtoken");
const Registered = require("../models/registeredschema");
const Action = require("../models/actionSchema");
const Reaction = require("../models/reactionSchema");

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
  const authToken = req.body.authToken;
  const verified = jwt.verify(authToken, process.env.TOKEN_SECRET);
  Reaction.find({ service: req.body.service }, function(err, docs) {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
    res.send(docs);
  });
});

module.exports = router;
