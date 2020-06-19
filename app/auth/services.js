const {Users} = require('../../lib/database');
const bcrypt  = require('bcrypt'); 
const jwt     = require('jsonwebtoken');
const {config: { authJwtSecret }} = require('../../config');
module.exports =  (username, password) => {
    return new Promise((resolve, reject) => {
        Users.findOne({ where: {username: username}})
            .then(user => {
                bcrypt.compare(password, user.userPassword)
                    .then(r => {
                        if(r == true){
                            const payload = {check:true};
                            const token   = jwt.sign(payload, authJwtSecret, {expiresIn:'1h'});
                            resolve(token);
                        }else{
                            reject("can't authenticate") 
                        }
                    })
                    .catch(e => {
                        reject("can't authenticate");
                    })
            })
            .catch(err => {
                reject("can't authenticate");
            });
    });
}
