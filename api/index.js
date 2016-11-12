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
        const { admin, id, username, email, firstname, lastname } = req.user;

        res.json(
            admin ?
                { admin, id, username, email, firstname, lastname } :
                { id, username, email, firstname, lastname }
        )
    }
);

apirouter.get('/login',
    ensureLogin,
    (req, res) => {
        const { admin, id, username, email, firstname, lastname } = req.user;
        let user =
            admin ?
            { admin, id, username, email, firstname, lastname } :
            { id, username, email, firstname, lastname };

        res.set('Content-Type', 'application/javascript');
        res.send(
            `var authState = ${ JSON.stringify(user) }`
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
