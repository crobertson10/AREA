const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('../passport');
const verify = require('./verifyToken');
const User = require('../models/usershema');
const Registered = require('../models/registeredschema');
const { registerValidation, loginValidation } = require('../validation');
const axios = require('axios');
const url = require('url');

const dotenv = require('dotenv');
dotenv.config();

const ClientUrl = process.env.CLIENT_URL;

router.post('/register', async (req, res) => {
    // Validate data
    const { error } = registerValidation(req.body);
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
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        password: hash
        });
    // Save new user
    try {
        const savedUser = await user.save();
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        res.send({ authToken: token });
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/login', async (req, res) => {
    // Validate data
    const { error } = loginValidation(req.body);
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
    console.log(token);
    
    res.send({ authToken: token });
});

router.post('/save', verify, async (req, res) => {
    const authToken = req.body.authToken;
    const token = req.body.token;
    const service = req.body.service;
    const verified = jwt.verify(authToken, process.env.TOKEN_SECRET);
    Registered.findOne({ userId: verified._id, name: service }, function (err, account) {
        if (err) {
            console.log(err);
            return res.status(400).send('Error');
        }
        if (!err && account) {
            return res.send("Account already exist");
        }
        else {
            account = new Registered({
                userId: verified._id,
                name: service,
                token: token    
            })
            try {
                account.save();
                return res.send("Succes");
            } catch (error) {
                console.log("Server Error while updating user Id");
                return res.status(400).send('Error');
            }
        }
    });
});

module.exports = router;