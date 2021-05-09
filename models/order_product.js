'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class Order_product extends Model {
        static associate(models) {
            // define association here
            this.belongsTo(models.Order, {
                foreignKey: 'idOrder',
                targetKey: 'id'
            });
            this.belongsTo(models.Product, {
                foreignKey: 'idProduct',
                targetKey: 'id'
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