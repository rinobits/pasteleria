// packages
const boom                      = require('@hapi/boom');
// imports & consts
const UserServices              = require('./services');
const userServices              = new UserServices();
const searchUsers = () => {
    return (req, res, next) => {
        userServices.findUsers()
            .then(responses => {
                for(let i = 0; i < responses.users.length; i++){
                    delete responses.users[i].dataValues.userPassword;
                }
                i = 0;
                responses = [...responses.users];
                res.json(responses);
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const searchUserById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        userServices.findUserById(id)
            .then(response => {
                delete response.user.dataValues.userPassword;
                res.json(response.user.dataValues)
            })
            .catch(e => next(boom.badImplementation(e)))
    }
}
const createUser = () => {
    return (req, res, next) => {
        const {body} = req;
        userServices.createUser(body)
            .then(response => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const updateUserById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        userServices.updateUserById(id, body) 
        .then(response => res.json({"MODIFY DATA": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const deleteUserById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        userServices.deleteUserById(id)
            .then(response => res.json({'DELETE DATA' : true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    searchUsers,
    searchUserById,
    createUser,
    updateUserById,
    deleteUserById
};

