'use strict';

let products = [{
        name: "Vitello tonnato",
        description: "Carne de ternera con salsa de atún",
        image: "https://www.sfizioso.it/wp-content/uploads/2020/08/vitello-tonnato-in-pentola-a-pressione.jpg",
        price: 8,
        category: "starter"
    },
    {
        name: "Ensalada griega",
        description: "Ensalada con verduras frescas e higos",
        image: "https://cdn.pixabay.com/photo/2016/09/15/19/24/salad-1672505__340.jpg",
        price: 4,
        category: "starter"
    },
    {
        name: "Tostas Griegas",
        description: "Tostas con queso e higo",
        image: "https://cdn.pixabay.com/photo/2018/08/29/19/01/fig-3640553__340.jpg",
        price: 4,
        category: "starter"
    },
    {
        name: "Crema de calabacin",
        description: "Fresca crema de calabacin acompañado de queso cremoso",
        image: "https://cdn.pixabay.com/photo/2017/09/25/18/22/pea-soup-2786133__340.jpg",
        price: 4,
        category: "starter"
    },
    {
        name: "Ensalada griega",
        description: "Ensalada con verduras frescas e higos",
        image: "https://cdn.pixabay.com/photo/2016/04/22/16/23/asparagus-green-1346076__340.jpg",
        price: 5,
        category: "starter"
    },
    {
        name: "Aguacate relleno",
        description: "Aguacate relleno acompañado de salmon",
        image: "https://cdn.pixabay.com/photo/2017/08/30/15/30/salad-2697546__340.jpg",
        price: 4,
        category: "starter"
    },
    {
        name: "Pan rustico",
        description: "Pan rustico hecho en leña",
        image: "https://cdn.pixabay.com/photo/2020/06/16/15/48/bread-5306324__340.jpg",
        price: 2,
        category: "starter"
    },
    {
        name: "Crema de remolacha",
        description: "Crema de remolacha",
        image: "https://cdn.pixabay.com/photo/2017/09/11/20/38/beetroot-2740379__340.jpg",
        price: 4,
        category: "starter"
    },
    {
        name: "Tabla romana",
        description: "Tabla de diferentes ingredientes de temporada",
        image: "https://cdn.pixabay.com/photo/2016/08/01/22/08/buffet-1562290__340.jpg",
        price: 4,
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
        image: "https://cdn.pixabay.com/photo/2016/03/05/23/02/barbecue-1239434__340.jpg",
        price: 7,
        category: "plate"
    },
    {
        name: "Pescado ahumado",
        description: "Pescado ahumado",
        image: "https://cdn.pixabay.com/photo/2017/06/02/17/37/fish-2366925__340.jpg",
        price: 6,
        category: "plate"
    },
    {
        name: "Milanesa",
        description: "Milanesa de Pollo",
        image: "https://cdn.pixabay.com/photo/2016/11/19/02/22/schnipo-1837703__340.jpg",
        price: 7,
        category: "plate"
    },
    {
        name: "Mejillones",
        description: "Mejillones",
        image: "https://cdn.pixabay.com/photo/2017/03/03/13/26/mussels-2114006__340.jpg",
        price: 8,
        category: "plate"
    },
    {
        name: "Goulash",
        description: "Goulash",
        image: "https://cdn.pixabay.com/photo/2016/08/19/17/56/goulash-1605840__340.jpg",
        price: 9,
        category: "plate"
    },
    {
        name: "Osobuco",
        description: "Osobuco",
        image: "https://cdn.pixabay.com/photo/2017/07/24/17/51/osso-buco-2535546__340.jpg",
        price: 7,
        category: "plate"
    },
    {
        name: "Flan",
        description: "Flan casero con dulce de leche",
        image: "https://cdn.pixabay.com/photo/2017/01/06/17/18/caramel-1958358__340.jpg",
        price: 3,
        category: "dessert"
    },
    {
        name: "Tiramisu",
        description: "Tiramisu italiano",
        image: "https://cdn.pixabay.com/photo/2017/01/11/11/33/cake-1971552__340.jpg",
        price: 6,
        category: "dessert"
    },
    {
        name: "Helado",
        description: "Helado de fresa, chocolate y vainilla",
        image: "https://cdn.pixabay.com/photo/2016/12/26/16/09/bowl-1932375__340.jpg",
        price: 5,
        category: "dessert"
    },
    {
        name: "Brownie",
        description: "Brownie acompadado de helado",
        image: "https://cdn.pixabay.com/photo/2014/03/07/11/00/bananas-282313__340.jpg",
        price: 3,
        category: "dessert"
    },
    {
        name: "Eclair",
        description: "Eclair",
        image: "https://cdn.pixabay.com/photo/2018/05/01/18/21/eclair-3366430__340.jpg",
        price: 2,
        category: "dessert"
    },
    {
        name: "La Crème Brûlée",
        description: "La Crème Brûlée",
        image: "https://cdn.pixabay.com/photo/2019/04/26/09/21/dessert-4157098__340.jpg",
        price: 6,
        category: "dessert"
    },{
        name: "Font Vella",
        description: "Agua Font Vella",
        image: "https://raja.scene7.com/is/image/Raja/products/vella-agua-mineral-sin-gas-botella-plastico_55574.jpg?image=asset1443096$default$&hei=300&wid=300",
        price: 0.89,
        category: "drink"
    },
    {
        name: "Cielo",
        description: "Agua Cielo",
        image: "https://plazavea.vteximg.com.br/arquivos/ids/530057-450-450/20032267.jpg?v=637419672840930000",
        price: 1.99,
        category: "drink"
    },
    {
        name: "San Luis",
        description: "Agua San Luis",
        image: "http://s3.amazonaws.com/imagenes-sellers-mercado-ripley/2020/10/01145503/6531.png",
        price: 1.72,
        category: "drink"
    },
    {
        name: "Bezoya",
        description: "Agua Bezoya",
        image: "https://sitgesverd.es/2424-large_default/agua-mineral-bezoya-15l.jpg",
        price: 0.69,
        category: "drink"
    },
    {
        name: "Dasani",
        description: "Agua Dasani",
        image: "https://lamiga.com.py/wp-content/uploads/2020/07/dasani.jpeg",
        price: 0.59,
        category: "drink"
    },
    {
        name: "Cocacola",
        description: "Coca-cola",
        image: "https://dreamfood.es/1748-thickbox_default/cocacola-original-33cl.jpg",
        price: 2,
        category: "drink"
    },
    {
        name: "Fanta",
        description: "Fanta naranja",
        image: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/3080026_f.jpg",
        price: 2,
        category: "drink"
    },
    {
        name: "Pepsi",
        description: "Pepsi",
        image: "https://metrocolombiafood.vteximg.com.br/arquivos/ids/157501-1000-1000/7702090029567-1.jpg?v=636670241163370000",
        price: 2,
        category: "drink"
    },
    {
        name: "Radler",
        description: "Radler Amstel cerveza",
        image: "https://www.viguisa.es/4041/cerveza-amstel-radler-pack-24-latas.jpg",
        price: 2,
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