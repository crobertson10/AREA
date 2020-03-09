var express = require('express');
var router = express.Router();
var cr = require('../cron/cron');
var Registered = require('../models/registeredschema');

router.get('/github/on', function(req, res){
   cr.id = req.param('id');
   cr.task.start();
});

router.get('/github/off', function(req, res){
   cr.task.stop();
});

module.exports = router;