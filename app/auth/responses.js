// packages
const boom                      = require('@hapi/boom');
// imports & consts
const auth                      = require('./services');


const login = (req, res, next) => {
    auth(req.body.userName, req.body.userPassword)
        .then(r => res.json({token : r}))
        .catch(e => next(boom.unauthorized(e)))
    }
module.exports = {
    login
}