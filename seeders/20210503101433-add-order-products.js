'use strict';
let order_products = [
  {
    count: 1,
    idProduct: 1,
    idOrder: 1,
  }
];

order_products = order_products.map((order_product) => ({...order_product, updatedAt: new Date, createdAt: new Date}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Order_products', order_products);
  },

  down: async (queryInterface, Sequelize) => {

  }
};
