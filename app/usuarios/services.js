const {Users}                   = require('../../lib/database');
const bcrypt                    = require('bcrypt'); 
class UserServices{
    findUsers(){
        return new Promise((resolve, reject) => {
            Users.findAll()
                .then(r => resolve({users: r})) 
                .catch(e => reject(e));
        });
    }
    findUserById(id){
        return new Promise((resolve, reject) => {
            Users.findByPk(id)
                .then(r => resolve({'user':r}))
                .catch(e => reject(e));
        });
    }
    createUser(body){
        return new Promise((resolve, reject) => {
            bcrypt.hash(body.userPassword, 10)
            .then(hash => {
                body.userPassword = hash;
                Users.create(body)
                .then(r => resolve(r))
                .catch(e => reject(e));
                
            })
            .catch(e => reject(e));
        });
    }
    updateUserById(id, body){
        return new Promise((resolve, reject) => {
            bcrypt.hash(body.userPassword, 10) // en vez de hacer el find, creamos el hash y buscamos después
            .then(hash => {
                body.userPassword = hash;
                Users.update(body, {
                    where: {id: id}
                })
                .then(r => {
                    if(r == 1){
                        resolve({"MODIFY DATA:": true});
                    }
                    else reject({"MODIFY DATA:": false})
                })
                .catch(e => reject(e));
            })
            .catch(e => reject(e));
        });
    }
    deleteUserById(id){
        return new Promise((resolve, reject) => {
            Users.destroy({
                where: {id}
            })
            .then(r => {
                if(r == 1) resolve({"DELETE DATA:": true});
                else reject({"DELETE DATA:": false})
            })
            .catch(e => reject(e));
        });
    }
    
}
module.exports = UserServices;
