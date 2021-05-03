'use strict';

let orders = [
  {
    delivered: true,
    // idOrder_product: 1,
    idUser: 1,
  }
];

orders = orders.map((order) => ({...order, updatedAt: new Date, createdAt: new Date}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', orders);
  },

  down: async (queryInterface, Sequelize) => {

  }
};
