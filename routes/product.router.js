const router = require('express').Router();
const productController = require('../controllers/product.controller');

/***
 * ENDPOINTS
 */

//getAll
router.get('/', async(req, res) => {
    try {
        res.json(await productController.getAll(req.query.category));
    } catch (error) {
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

module.exports = router;