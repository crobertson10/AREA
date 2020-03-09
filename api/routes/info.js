const router = require('express').Router();
const verify = require('./verifyToken');
const Registered = require('../models/registeredschema');

router.get('/registered', verify, (req, res) => {
    const github = 'false';
    const epitech = 'false';

    
})

router.get('/services', (req, res) => {
    const authToken = req.body.authToken;
    const verified = jwt.verify(authToken, process.env.TOKEN_SECRET);
    Registered.find({userId: verified._id}, function (err, docs) {
        console.log(docs);
        res.send(docs);
    })
})

router.get('/services/add', (req, res) => {
    const id = req.body.id;
    const name = req.body.name;
    Registered.findOne({userId: req.body.id, name: name}, function (err, docs) {
        if (err) {
            return res.status(400).send('ERROR');
        }
        if (!err && docs) { return res.send("existing")}
        docs = new Registered({
            userId: id,
            name: name,
            token: "tamere"
        })
        try {
            docs.save();
            return res.send("Succes");
        } catch (error) {
            console.log("Server Error while updating user Id");
            return res.status(400).send('Error');
        }
    })
})

module.exports = router;