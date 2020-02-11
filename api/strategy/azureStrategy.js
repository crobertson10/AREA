const Strategy = require('passport-azure-ad-oauth2').Strategy;
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

const User = require('../models/usershema');
const Registered = require('../models/registeredschema');

dotenv.config();

const slackStrategy = new Strategy({
    clientID: process.env.AZURE_ID,
    clientSecret: process.env.AZURE_SECRET,
    callbackURL: process.env.AZURE_CB_URL,
    passReqToCallback: true,
    allowHttpForRedirectUrl: true
},
function (req, accessToken, refresh_token, params, profile, done) {
    const tkn = req.header('auth-token');
    verified = jwt.verify(tkn, process.env.TOKEN_SECRET);
    console.log(verified);
    
    User.findOne({ _id: verified._id }, function (errr, user) {
        if (errr) {
            console.log(errr);
            return done(errr);
        }
        if (!errr && !user) {
            return done("User does not exist");
        }
        Registered.findOne({ userId: user._id, name: "Github" }, function(err, account) {
            if (err) {
                console.log(err);
                return done(err);
            }
            if (!err && account) {
                return done(null, account);
            }
            else {
                account = new Registered({
                    userId: user._id,
                    name: "Azure",
                    token: accessToken
                });
                console.log(account);
                try {
                    account.save();
                    return done(null, account);
                } catch (error) {
                    console.log("Error while Github DB saving");
                    console.log(error);
                    return done(error);
                }                
            }
        });
    });
}
);

module.exports = slackStrategy;