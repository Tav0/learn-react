/*
 * Implement router for /api endpoints.
 */
const express  = require('express');
const passport = require('passport');
const passportConfig = require('../passport.js')

var apirouter = express.Router();

apirouter.get('/', function(req, res) {
    res.json({status: true, message: 'API is accessible' });	
});

apirouter.use('/users', require('./users'))

const ensureLogin = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.set('Content-Type', 'application/javascript');
        res.send(`var authState = { }`);
    }
}

// Implement /api/login authentication entry point.
// For this to work, passport must be using a strategy
// from passport-local.
// You should implement that strategy in users.js
apirouter.post('/login',
    passport.authenticate('local'),
    (req, res) => {
        res.json({ message: "you are successfully authenticated" })
    }
);

apirouter.get('/login',
    ensureLogin,
    (req, res) => {
        let id = req.user.id;
        let username = req.user.username;
        let email = req.user.email;
        let firstname = req.user.firstname;
        let lastname = req.user.lastname;

        res.set('Content-Type', 'application/javascript');
        res.send(
            `var authState = {
                id: '${id}',
                username: '${username}',
                email: '${email}',
                firstname: '${firstname}',
                lastname: '${lastname}'
            }`
        );
    }
);

apirouter.get('/logout',
    (req, res) => {
        req.logout();
        res.json({ message: "Successfully logged out." });
    }
);


module.exports = apirouter
