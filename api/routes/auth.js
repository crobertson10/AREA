const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const verify = require('./verifyToken');
const passport = require('../config/passport');
const User = require('../models/usershema');
const { validation } = require('../validation');

router.post('/register', async (req, res) => {
    // Validate data
    const { error } = validation(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);
    // Check existing user
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist)
        return res.status(400).send('Email already exist');
    // Crypting password
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(req.body.password, salt);
    // Create new user
    const user = new User({
        email: req.body.email,
        password: hash
        });
    // Save new user
    try {
        const savedUser = await user.save();
        res.send({ user: savedUser._id });
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/login', async (req, res) => {
    // Validate data
    const { error } = validation(req.body);
    if (error)
        return res.status(400).send(error.details[0].message);

    // Check email
    const user = await User.findOne({email: req.body.email});
    if (!user)
        return res.status(400).send('Email not found');

    // Check password
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword)
        return res.status(400).send('Invalid password');

    // Create and assign jwt
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);
});

router.get('/auth/github', verify, (req, res, next) => {
    passport.authenticate('github')(req, res, next);
});

module.exports = router;