'use strict';
const bcrypt = require('bcrypt');

let users = [
  {
    name: "Gian",
    surname1: "Rondo",
    surname2: "Santa cruz",
    age: 29,
    gender: "Masculino",
    address: "calle 1",
    city: "Benaguasil",
    state: "Valencia",
    cp: 46180,
    phone: 65555555,
    birth: "1991.12.05",    
    email: "gian@gmail.com",
    password: bcrypt.hashSync("Gian2021!",6),
    isAdmin: false
  },
  {
    name: "Admin",
    surname1: "Rondo",
    surname2: "Santa cruz",
    age: 29,
    gender: "Masculino",
    address: "calle 1",
    city: "Benaguasil",
    state: "Valencia",
    cp: 46180,
    phone: 65555555,
    birth: "1991.12.05",    
    email: "admin@gmail.com",
    password: bcrypt.hashSync("Admin2021!",6),
    isAdmin: true
  }
];

users = users.map((user) => ({...user, updatedAt: new Date, createdAt: new Date}));

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', users);
  },

  down: async (queryInterface, Sequelize) => {

  }
};
