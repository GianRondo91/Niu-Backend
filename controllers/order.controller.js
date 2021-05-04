const {Order} = require('../models');

class OrderController{
    constructor(){}

    async create(order, userId){
        order.idUser = userId;
        return Order.create(order);
    };

    async getAll(userId){
        if(userId == null){
            return Order.findAll();
        }
        return Order.findAll({where: {idUser: userId}});
    };

    async findById(id){
        if(userId == null){
            return Order.findOne({where: {id}});
        }
        return Order.findOne({where: {id, idUser: userId}});
    }

    async update(order, id){
        if(userId == null){
            return Order.update(order, {where:{id}});
        }
        return Order.update(order, {where:{id, idUser: userId}});
    };

    async delete(id){
        if(userId == null){
            return Order.destroy({where:{id}});
        }
        return Order.destroy({where:{id, idUser: userId}});
    };
};

let orderController = new OrderController;

module.exports = orderController;