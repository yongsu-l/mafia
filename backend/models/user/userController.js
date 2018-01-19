// userController.js

var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended : true }));

var user = require('./user');

// Create new user once user logs in
router.post('/', (req, res) => {

    user.create({
        username: req.body.username,
        type: '',
        alive: true
    },
    (err, user) => {
        if (err) return res.status(500).send("There was a problem adding information to the database.").
        res.status(200).send(user);
    });
});

router.get('/', (req, res) => {

    user.find({}, (err, users) => {
        if (err) return res.status(500).send("There was a problem finding the users.");
        res.status(200).send(users);
    });
});

module.exports = router;
