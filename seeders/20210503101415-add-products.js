'use strict';

let products = [{
        name: "Vitello tonato",
        description: "Carne de ternera con salsa de atún",
        image: "https://www.hola.com/imagenes/cocina/recetas/20200130159403/pollo-asado-en-horno-de-lena/0-779-940/pollo-asado-m.jpg",
        price: 8,
        category: "starter"
    },
    {
        name: "Pollo asado",
        description: "Pollo asado con acompañamiento de patatas asadas",
        image: "https://www.hola.com/imagenes/cocina/recetas/20200130159403/pollo-asado-en-horno-de-lena/0-779-940/pollo-asado-m.jpg",
        price: 12,
        category: "plate"
    },
    {
        name: "Carne asada",
        description: "Carne asada con acompañamiento de patatas asadas",
        image: "https://www.hola.com/imagenes/cocina/recetas/20200130159403/pollo-asado-en-horno-de-lena/0-779-940/pollo-asado-m.jpg",
        price: 7,
        category: "plate"
    },
    {
        name: "Flan",
        description: "Flan casero con dulce de leche",
        image: "https://www.hola.com/imagenes/cocina/recetas/20200130159403/pollo-asado-en-horno-de-lena/0-779-940/pollo-asado-m.jpg",
        price: 3,
        category: "dessert"
    },
    {
        name: "Cocacola",
        description: "Coca-cola",
        image: "https://dreamfood.es/1748-thickbox_default/cocacola-original-33cl.jpg",
        price: 2,
        category: "drink"
    },
    {
        name: "Agua",
        description: "Agua",
        image: "https://www.hola.com/imagenes/cocina/recetas/20200130159403/pollo-asado-en-horno-de-lena/0-779-940/pollo-asado-m.jpg",
        price: 1.5,
        category: "drink"
    }
];

products = products.map((product) => ({...product, updatedAt: new Date, createdAt: new Date }));

module.exports = {
    up: async(queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Products', products);
    },

    down: async(queryInterface, Sequelize) => {

    }
};