var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(req.headers);
  res.render('index', { title: 'Express' });
});

router.get('/about.json', function(req, res, next) {
  console.log(req.ip.split(":").pop());
  res.status(200).json({
    client: {
      host: req.ip.split(":").pop()
    },
    server: {
      current_time: Math.floor(new Date() / 1000),
      services: [{
        name: 'facebook'
      }, {
        name: 'github',
        actions: [{
          name: 'create_repo',
          description: 'create a repository'
        }, {
          name: 'delete_repo',
          description: 'delete a repository'
        }, {
          name: 'invite_mate',
          description: 'add a mate to collaborate on your repository'
        }, {
          name: 'kick_mate',
          description: 'kick a mate from your repository'
        }, {
          name: 'transfer_rights',
          description: 'give a repository to your friend'
        }]
      }, {
        name: 'slack',
        actions: [{
          name: 'send_message',
          description: 'send a message to a conversation channel'
        }, {
          name: 'create_conv',
          description: 'create a channel to chat with your mate'
        }]
      }, {
        name: 'trello',
        actions: [{
          name: 'create_board',
          description: 'create a new board to work with'
        }, {
          name: 'delete_board',
          description: 'delete a board'
        }, {
          name: 'add_mate',
          description: 'add a mate to your board'
        }, {
          name: 'kick_mate',
          description: 'kick a mate from your board'
        }]
      }, {
        name: 'yammer'
      }, {
        name: 'twitch'
      }, {
        name: 'nasa',
        actions: [{
          name: 'get_image',
          description: 'get image of the day'
        }, {
          name: 'get_explanations',
          description: 'get the info of today image'
        }]
      }, {
        name: 'weather',
        actions: {
          name: 'get_weather_around_globe',
          description: 'get the weather from any country or city'
        }
      }, {
        name: 'time',
        actions: {
          name: 'get_time_around_the_globe',
          description: 'get the time from any country'
        }
      }]
    }
  });
});

module.exports = router;
