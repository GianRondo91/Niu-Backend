'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Order_product extends Model {
        static associate(models) {
            // define association here
            this.hasMany(models.Order, {
                sourceKey: 'id',
                foreignKey: 'idOrder'
            });
            this.hasMany(models.Product, {
                sourceKey: 'id',
                foreignKey: 'idProduct'
            });
        }
    };

    Order_product.init({
        count: DataTypes.INTEGER
            // iso: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Order_product',
    });
    return Order_product;
};