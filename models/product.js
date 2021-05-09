'use strict';

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

    class Product extends Model {
        static associate(models) {
        };
    };
    Product.init({
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        price: DataTypes.DOUBLE,
        category: DataTypes.STRING,
        image: DataTypes.STRING
            // iso: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'Product',
    });
    return Product;
};