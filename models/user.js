'use strict';

const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {

    class User extends Model {
        static associate(models) {
            // define association here
            this.hasMany(models.Order, {
                sourceKey: 'id',
                foreignKey: 'idOrder'
            });
        };
    };

    User.init({
        name: DataTypes.STRING,
        surname1: DataTypes.STRING,
        surname2: DataTypes.STRING,
        age: DataTypes.INTEGER,
        gender: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        state: DataTypes.STRING,
        cp: DataTypes.INTEGER,
        phone: DataTypes.INTEGER,
        birth: DataTypes.DATE,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        // iso: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;

};