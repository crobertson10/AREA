var express = require('express');
var router = express.Router();
var cr = require('../cron/cron');
var Registered = require('../models/registeredschema');

router.get('/github/on', function(req, res){
   cr.tokenGithub = req.body.authToken;
   cr.tokenSlack = req.body.authToken2;
   cr.chan = req.body.channel;
   cr.setTaskGithub();
   res.status(200).send({ url: request });
})

router.get('/github/off', function(req, res){
   let tab = [];
   console.log(cr.task);
   for(let i = 0; i < cr.task.length ;i++)
   {
      if (cr.task[i][1] == req.body.authToken && cr.task[i][2] == req.body.authToken2)
      {
         cr.task[i][0].destroy();
      }
      else
      {
         tab.push(cr.task[i]);
      }
   }
   cr.task = tab;
   res.status(200).send({ url: request });
});

module.exports = router;