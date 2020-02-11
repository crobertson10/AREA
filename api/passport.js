const passport = require('passport');

const githubStrategy = require('./strategy/githubStrategy');
const slackStrategy = require('./strategy/slackStrategy');
const azureStrategy = require('./strategy/azureStrategy');

passport.use('github', githubStrategy);

passport.use('slack', slackStrategy);

passport.use('azure', azureStrategy);

module.exports = passport;