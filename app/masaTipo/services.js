const {MasaTipo}                  = require('../../lib/database');
const bcrypt                    = require('bcrypt'); 

class CargoServices{
    masaTipoFindAll(){
        return new Promise((resolve, reject) => {
            MasaTipo.findAll({where:{estado:1}})
                .then(r => resolve({masaTipo: r})) 
                .catch(e => reject(e));
        });
    }
    masaTipoFindById(id){
        return new Promise((resolve, reject) => {
            MasaTipo.findAll(id, { where: {[Op.and]: [{id: id}, {estado: 1}]}})
                .then(r => resolve({'cargo':r}))
                .catch(e => reject(e));
        });
    }
    masaTipoCreate(body){
        return new Promise((resolve, reject) => {
            MasaTipo.create(body)
            .then(r => resolve(r))
            .catch(e => reject(e));
        });
    }
    masaTipoUpdateById(id, body){
        return new Promise((resolve, reject) => {
            MasaTipo.update(body, { where: {id: id}})
            .then(r => {
                if(r == 1){
                    resolve({"MODIFY DATA:": true});
                }
                else reject({"MODIFY DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    masaTipoDeleteById(id, estado = 0){
        return new Promise((resolve, reject) => {
            MasaTipo.update(estado, { where: {[Op.and]: [{id: id}, {estado: 1}]}})
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
