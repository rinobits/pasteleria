// packages
const express    = require('express');

// imports & consts 
const users      = require('./users/routes.js');

const index = (app) => {
    const router = express.Router();
    app.use('/', router);
    router.use('/users', users);
}

module.exports = index;
