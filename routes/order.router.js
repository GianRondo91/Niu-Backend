const router = require('express').Router();
const orderController = require('../controllers/order.controller');

/***
 * ENDPOINTS
 */

const getUserId = req => req.user.isAdmin ? null : req.user.id;

//create
router.post('/', async(req, res) => {
    try {
        let status = 'Orden creada con exito';
        let newOrder =  await orderController.create(req.body, req.user.id);

        res.json({newOrder, status});
    } catch (error) {
        res.status(500).json({
            message: 'Server error' + error
        });
    };
});

//getAll
router.get('/', async(req, res) => {
    try {
        let delivered = null;
        if(req.query.delivered){
            delivered = req.query.delivered === '1';
        }
        res.json(await orderController.getAll(getUserId(req), delivered));
    } catch (error) {
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//findById
router.get('/:id', async(req, res) => {
    try {
        let id = req.params.id;
        res.json(await orderController.findById(id, getUserId(req)));
    } catch (error) {
        res.status(500).json({
            message: 'Server error' + error
        });
    };
});

//update
router.put('/:id', async(req, res) => {
    try {
        let id = req.params.id;
        let status = 'Orden actualizada con exito';
        let result = await orderController.update(req.body, id, getUserId(req));

        res.json({status, result});
    } catch (error) {
        res.status(500).json({
            message: 'Server error' + error
        });
    };
});

//delete
router.delete('/:id', async(req, res) => {
    try {
        let id = req.params.id;
        let result = await orderController.delete(id, getUserId(req));
        let status = 'Orden eliminada con exito';

        res.json({result, status});
    } catch (error) {
        res.status(500).json({
            message: 'Server error' + error
        });
    };
});

//getAll
router.get('/:id/products', async(req, res) => {
    try {
        res.json(await orderController.getAllProducts(req.params.id, req.user.id));
    } catch (error) {
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

module.exports = router;