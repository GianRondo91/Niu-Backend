const {Product} = require('../models');

class ProductController{
    constructor(){}
    
    async getAll(){
        return Product.findAll();
    };
};

let productController = new ProductController;

module.exports = productController;