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
            this.hasMany(models.Order_product, {
                sourceKey: 'id',
                foreignKey: 'idOrder'
            });
        }
    };
    Order.init({
        delivered: DataTypes.BOOLEAN,
        price: DataTypes.DOUBLE,
        productCount: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Order',
    });
    return Order;
};