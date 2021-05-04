const {Order_product, Order} = require('../models');

class Order_productController{
    constructor(){}
    
    async addProduct(orderId, productId, count, userId){

        const order = await Order.findOne({where: {id: orderId, idUser: userId}});

        if(!order){
            throw 'Orden invalida';
        };

        const orderProduct =  await Order_product.findOne({where:{idOrder: orderId, idProduct: productId}});

        if(orderProduct){
            orderProduct.count+=count;
            await Order_product.update({count: orderProduct.count}, {where:{id: orderProduct.id}});
        } else{
            await Order_product.create({idOrder: orderId, idProduct: productId, count: count});
        }
    };

    async getAll(orderId, userId){

        const order = await Order.findOne({where: {id: orderId, idUser: userId}});

        if(!order){
            throw 'Orden invalida';
        };

        return Order_product.findAll({where:{idOrder:orderId}});
    };

    async deleteProduct(orderId, productId, count, userId){

        const order = await Order.findOne({where: {id: orderId, idUser: userId}});

        if(!order){
            throw 'Orden invalida';
        };

        const orderProduct =  await Order_product.findOne({where:{idOrder: orderId, idProduct: productId}});
        console.log(count);
        if(orderProduct && count > 0){
            orderProduct.count-=count;
            if(orderProduct.count > 0){
                await Order_product.update({count: orderProduct.count}, {where:{id: orderProduct.id}});
            }else{
                await Order_product.destroy({where:{id: orderProduct.id}});
            }
        }
    };
};

let orderProductController = new Order_productController;

module.exports = orderProductController;