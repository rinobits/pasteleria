// packages
const express    = require('express');

// imports & consts 
const usuarios   = require('./usuarios/routes');
const pedidos    = require('./pedidos/routes')
const auth       = require('./auth/routes');

const index = (app) => {
    const router = express.Router();
    app.use('/', router);
    router.use('/auth', auth);
    router.use('/usuarios', usuarios);
    router.use('/pedidos', pedidos);
}

module.exports = index;
