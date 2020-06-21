const { Cargos } = require('../../lib/database');
const bcrypt     = require('bcrypt'); 

class CargoServices{
    cargosFindAll(){
        return new Promise((resolve, reject) => {
            Cargos.findAll({where:{estado:1}})
                .then(r => resolve({cargos: r})) 
                .catch(e => reject(e));
        });
    }
    cargosFindById(id){
        return new Promise((resolve, reject) => {
            Cargos.findAll(id, { where: {[Op.and]: [{id: id}, {estado: 1}]}})
                .then(r => resolve({'cargo':r}))
                .catch(e => reject(e));
        });
    }
    cargosCreate(body){
        return new Promise((resolve, reject) => {
            Cargos.create(body)
            .then(r => resolve(r))
            .catch(e => reject(e));
        });
    }
    cargosUpdateById(id, body){
        return new Promise((resolve, reject) => {
            Cargos.update(body, { where: {id: id}})
            .then(r => {
                if(r == 1){
                    resolve({"MODIFY DATA:": true});
                }
                else reject({"MODIFY DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    cargosDeleteById(id, estado = 0){
        return new Promise((resolve, reject) => {
            Cargos.update(estado, { where: {[Op.and]: [{id: id}, {estado: 1}]}})
            .then(r => {
                if(r == 1){
                    resolve({"MODIFY DATA:": true});
                }
                else reject({"MODIFY DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    
}
module.exports = CargoServices;
