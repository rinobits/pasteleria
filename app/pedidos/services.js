const {Orders} = require('../../lib/database');
class OrderServices{
    findOrders(){
        return new Promise((resolve, reject) => {
            Orders.findAll()
                .then(r => resolve(r))
                .catch(e => reject(e));
        });
    }
    findOrderById(id){
        return new Promise((resolve, reject) => {
            Orders.findByPk(id)
            .then(r => resolve(r))
            .catch(e => reject(e));
        });
    }
    createOrder(body){
        return new Promise((resolve, reject) => {
            console.log(body);
            Orders.create(body)
            .then(r => resolve(r))
            .catch(e => reject(e));
        });
    }
    updateOrderById(id, body){
        return new Promise((resolve, reject) => {
            Orders.update(body, {
                where: {id: id}
            })
            .then(r => {
                if(r == 1) resolve({"MODIFY DATA": true})
                else reject({"MODIFY DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    deleteOrderById(id){
        return new Promise((resolve, reject) => {
            Orders.destroy({
                where: {id}
            })
            .then(r => {
                if(r == 1) resolve({"DELETE DATA": true})
                else reject({"DELETE DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    
}
module.exports = OrderServices;
