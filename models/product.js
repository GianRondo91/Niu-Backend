'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    class Product extends Model {
        static associate(models) {
            // define association here
            this.belongsTo(models.User, {
                foreignKey: 'idUser',
                targetKey: 'id'
            });
            this.belongsTo(models.Order_product, {
                foreignKey: 'id',
                targetKey: 'idOrder_product'
            });

        };
    };
    Product.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        image: DataTypes.STRING
            // iso: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};