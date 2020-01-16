const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/usershema');
const { registerValidation } = require('../validation');

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
        email: req.body.email,
        password: hash
        });
    // Save new user
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;