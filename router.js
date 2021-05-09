const router = require('express').Router();

const userRouter = require('./routes/user.router');
const productRouter = require('./routes/product.router');
const orderRouter = require('./routes/order.router');

//Otengo el middleware de AUTH
const auth = require('./middleware/auth');

//RESOURCES
router.use('/users', auth, userRouter);
router.use('/products', auth, productRouter);
router.use('/orders', auth, orderRouter);


module.exports = router;