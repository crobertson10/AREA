const Strategy = require('passport-slack').Strategy;
const dotenv = require('dotenv');

const User = require('../models/usershema');
const Slack = require('../models/slackschema');

dotenv.config();

const slackStrategy = new Strategy({
    clientID: "874294611140.913261696017",
    clientSecret: "41440fb4b20d8a11e2415d596777f163",
    callbackURL: "http://localhost:3000/api/user/auth/slack/callback",
    passReqToCallback: true
},
function (req, accessToken, refreshToken, profile, done) {
    const tkn = req.header('auth-token');
    verified = jwt.verify(tkn, process.env.TOKEN_SECRET);
    console.log(process.env.GITHUB_ID);
    
    User.findOne({ _id: verified._id }, function (errr, user) {
        if (errr) {
            console.log(errr);
            return done(errr);
        }
        if (!errr && !user) {
            return done("User does not exist");
        }
        Slack.findOne({ slackId: profile.id }, function(err, account) {
            if (err) {
                console.log(err);
                return done(err);
            }
            if (!err && account) {
                return done(null, account);
            }
            else {
                account = new Slack({
                    userId: verified._id,
                    slackId: profile.id,
                    token: accessToken,
                    username: profile.displayName
                });
                console.log(account);
                
                try {
                    account.save();
                    return done(null, account);
                } catch (error) {
                    console.log(error);
                    return (error)
                }
            }
        });
    });
}
);

module.exports = slackStrategy;