'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Order extends Model {
        static associate(models) {
            // define association here
            this.belongsTo(models.User, {
                foreignKey: 'idUser',
                targetKey: 'id'
            });
            this.belongsTo(models.Order_product, {
                foreignKey: 'idOrder_product',
                targetKey: 'id'
            });
        }
    };
    Order.init({
        delivered: DataTypes.BOOLEAN
            // iso: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};