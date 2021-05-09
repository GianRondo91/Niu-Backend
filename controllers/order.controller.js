const {Order, Order_product} = require('../models');

class OrderController{
    constructor(){}

    async create(order, userId){
        order.idUser = userId;
        order.delivered = false;

        if(!order.products && !order.products.length){
            throw 'La orden debe contener productos.';
        };

        let createdOrder = await Order.create(order);

        for(let product of order.products){
            console.log(product)
            await Order_product.create({idOrder: createdOrder.id, idProduct: product.id, count: product.count});
        };
    };

    async getAll(userId, delivered){

        if(delivered === null || delivered === undefined){
            if(userId == null){
                return Order.findAll();
            }
            return Order.findAll({where: {idUser: userId}});
        }

        if(userId == null){
            return Order.findAll({where: {delivered}});
        }
        return Order.findAll({where: {idUser: userId, delivered}});
    };

    async findById(id, userId){
        if(userId == null){
            return Order.findOne({where: {id}});
        }
        return Order.findOne({where: {id, idUser: userId}});
    }

    async update(order, id, userId){
        if(userId == null){
            return Order.update(order, {where:{id}});
        }
        return Order.update(order, {where:{id, idUser: userId}});
    };

    async delete(id, userId){

        let order = this.findById(id, userId);

        if(!order)
        {
            throw 'Orden inexistente';
        }

        if(order.delivered)
        {
            throw 'No es posible borrar ordenes entegadas';
        }

        await Order_product.destroy({where:{idOrder: id}});

        return Order.destroy({where:{id}});
    };

    async getAllProducts(id, userId){

        let order = this.findById(id, userId);

        if(!order)
        {
            throw 'Orden inexistente';
        }

        return Order_product.findAll({where:{idOrder:id}});
    };
};

let orderController = new OrderController;

module.exports = orderController;