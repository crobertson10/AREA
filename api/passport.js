const passport = require('passport');
const githubStrategy = require('passport-github');
const User = require('./models/usershema');
const Github = require('./models/githubschema');
const jwt = require('jsonwebtoken');

passport.use('github' ,new githubStrategy({
    clientID: '8c5b5264f9da75c1176b',
    clientSecret: '7c2929eb193d668663dc4d44c7a9c7c62f00f3eb',
    callbackURL: "http://localhost:3000/api/user/auth/github/callback",
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
));

module.exports = passport;