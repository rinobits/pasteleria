// packages
const express    = require('express');

// imports & consts 
const users      = require('./users/routes');
const auth       = require('./auth/routes')
const index = (app) => {
    const router = express.Router();
    app.use('/', router);
    router.use('/auth', auth);
    router.use('/users', users);
}

module.exports = index;
