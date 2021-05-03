'use strict';

let products = [
  {
    name: "Pollo asado",
    description: "Pollo asado con acompañamiento de patatas asadas",
    image: "https://www.hola.com/imagenes/cocina/recetas/20200130159403/pollo-asado-en-horno-de-lena/0-779-940/pollo-asado-m.jpg",
    idUser: 1,
  }
];

products = products.map((product) => ({...product, updatedAt: new Date, createdAt: new Date}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', products);
  },

  down: async (queryInterface, Sequelize) => {
   
  }
};
