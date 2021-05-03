const {User} = require('../models');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'pwsSecret';

class UserController {
    constructor(){}

    async register(user){
        user.password = await bcrypt.hash(user.password, 6);
        return User.create(user);
    }

    async logIn(email, password){
        const user = await User.findOne({where:{email}});

        if(!user){
            return null;
        }

        if(!await bcrypt.compare(password, user.password)){
            return null;
        }

        const payload = {
            idUser: user.id,
            tokenCreationDate: new Date
        }

        return {
            token: jwt.sign(payload, secret),
            id: user.id
        }
    }

    async indexAll(){
        return User.findAll();
    }

    async LogOut(){}

    async update(user, id){
        return User.update(user, {where:{id}});
    }

    async delete(id){
        return User.destroy({where:{id}});
    }
}

let userController = new UserController;

module.exports = userController;