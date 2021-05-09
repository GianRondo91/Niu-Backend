const {Product} = require('../models');

class ProductController{
    constructor(){}
    
    async getAll(category){
        if(category){
            return Product.findAll({where: {category}});
        }
        return Product.findAll();
    };
};

let productController = new ProductController;

module.exports = productController;