const Strategy = require('passport-github');
const dotenv = require('dotenv');

const User = require('../models/usershema');
const Github = require('../models/githubschema');

dotenv.config();

const githubStrategy = new Strategy({
    clientID: process.env.GITHUB_ID,
    clientSecret: process.env.GITHUB_SECRET,
    callbackURL: process.env.GITHUB_CB_URL,
    passReqToCallback: true
},
function (req, accessToken, refreshToken, profile, done) {
    const tkn = req.header('auth-token');
    verified = jwt.verify(tkn, process.env.TOKEN_SECRET);
    User.findOne({ _id: verified._id }, function (errr, user) {
        if (errr) {
            console.log(errr);
            return done(errr);
        }
        if (!errr && !user) {
            return done("User does not exist");
        }
        Github.findOne({ githubId: profile.id }, function(err, account) {
            if (err) {
                console.log(err);
                return done(err);
            }
            if (!err && account) {
                return done(null, account);
            }
            else {
                account = new Github({
                    userId: verified._id,
                    githubId: profile.id,
                    token: accessToken,
                    username: profile.username
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

module.exports = githubStrategy;