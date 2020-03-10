const router = require("express").Router();
const verify = require("./verifyToken");
const jwt = require("jsonwebtoken");
const Registered = require("../models/registeredschema");
const Action = require("../models/actionSchema");
const Reaction = require("../models/reactionSchema");

router.post("/services", verify, (req, res) => {
  console.log(req.body);
  const authToken = req.body.authToken;
  console.log(authToken);
  const verified = jwt.verify(authToken, process.env.TOKEN_SECRET);
  console.log(verified);
  Registered.find({ userId: verified._id }, function(err, docs) {
    if (err) {
      console.log(err);
      return res.status(400).send(err);
    }
    console.log(docs);
    
    res.send(docs);
  });
});

router.get("/actions", verify, (req, res) => {
  Action.find({ service: req.body.service }, function(err, docs) {
    if (err) {
      // console.log(err);
      // return res.status(400).send(err);
    }
    // res.send(docs);
  });
});

router.get("/reactions", verify, (req, res) => {
  const authToken = req.body.authToken;
  const verified = jwt.verify(authToken, process.env.TOKEN_SECRET);
  Reaction.find({ service: req.body.service }, function(err, docs) {
    if (err) {
      // console.log(err);
      // return res.status(400).send(err);
    }
    // res.send(docs);
  });
});

module.exports = router;
