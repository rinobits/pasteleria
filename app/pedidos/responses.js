// package
const boom                      = require('@hapi/boom');

// imports & consts 
const OrderServices = require('./services');
const orderServices = new OrderServices();

const searchOrders = () => {
    return (req, res, next) => {
        orderServices.findOrders()
            .then(responses => {
                let i = 0;
                let tmp = []
                for(i = 0; i < responses.length; i++){
                    tmp[i] = responses[i].dataValues;
                }
                responses = tmp;
                res.json([...responses])
            })
            .catch(e => next(boom.badImplementation(e)))
        }
}
const searchOrderById = () => {
    return (req, res, next) => {
        const {id} = req.params;
        orderServices.findOrderById(id)
            .then(response => {
                delete response.orderPassword;
                res.json(response)
            })
            .catch(e => next(boom.badImplementation(e)))
        }
}
const createOrder = () => {
       return (req, res, next) => {
            const {body} = req;
            orderServices.createOrder(body)
            .then(response => res.json({"CREATED": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
const updateOrderById = () => {
    return (req, res, next) => {
        const {body} = req;
        const {id}   = req.params;
        orderServices.updateOrderById(id, body) // (!)
        .then(response => res.json({"MODIFY DATA": true}))
        .catch(e => next(boom.badImplementation(e)))
    }
}
const deleteOrderById = () => {
    return (req, res, next) => {
        const {id} = req.params
        orderServices.deleteOrderById(id)
            .then(response => res.json({"DELETE DATA": true}))
            .catch(e => next(boom.badImplementation(e)))
    }
}
module.exports = {
    searchOrders,
    searchOrderById,
    createOrder,
    updateOrderById,
    deleteOrderById
};

