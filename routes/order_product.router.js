const router = require('express').Router();
const order_productController = require('../controllers/order_product.controller');

/***
 * ENDPOINTS
 */

//addProduct
router.post('/', async(req, res) => {
    try {
        let idOrder = req.orderId;
        let status = 'Producto agregado con exito';
        let addProduct = await order_productController.addProduct(idOrder, req.body.idProduct, req.body.count, req.user.id);

        res.json({addProduct, status});
    } catch (error) {
        res.status(500).json({
            message: 'Server error' + error
        });
    }
});

//getAll
router.get('/', async(req, res) => {
    try {
        res.json(await order_productController.getAll(req.orderId, req.user.id));
    } catch (error) {
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//deleteProduct
router.delete('/:productId', async(req, res) => {
    try {
        let idOrder = req.orderId;
        let idProduct = req.params.productId;
        let count = req.count;
        let status = 'Producto eliminado con exito';
        let addProduct = await order_productController.deleteProduct(idOrder, idProduct, count, req.user.id);

        res.json({addProduct, status});
    } catch (error) {
        res.status(500).json({
            message: 'Server error' + error
        });
    }
});

module.exports = router;