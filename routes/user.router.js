const router = require('express').Router();
const userController = require('../controllers/user.controller');

/***
 * ENDPOINTS
 */

//register
router.post('/', async(req, res) => {
    try {
        let status = 'Usuario creado con exito';
        let newUser = await userController.register(req.body);

        res.json({ newUser, status });
    } catch (error) {
        res.status(500).json({
            message: 'Server error' + error
        });
    };
});

//logIn
router.post('/login', async(req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;

        console.log('Comprobación del post login', email, password);

        let token = await userController.logIn(email, password);

        if (token) {
            res.json(token);
        } else {
            res.sendStatus(403);
        };
    } catch (error) {
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//getAll
router.get('/', async(req, res) => {
    try {
        if (!req.user.isAdmin) {
            res.json([]);
        } else {
            res.json(await userController.getAll());
        };
    } catch (error) {
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//update
router.put('/:id', async(req, res) => {
    try {
        let id = req.params.id;

        if (!req.user.isAdmin && id !== req.user.id) {
            res.sendStatus(403);
            return;
        }

        let status = 'Usuario actualizado con exito';
        let result = await userController.update(req.body, id);

        res.json({ status, result });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//logOut
router.get('/logout', async(req, res) => {
    try {
        let status = 'Usuario deslogeado con exito';
        res.sendStatus(200);
        res.json({ status });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

//delete
router.delete('/:id', async(req, res) => {
    try {
        let id = req.params.id;

        if (!req.user.isAdmin && id !== req.user.id) {
            res.sendStatus(403);
            return;
        }
        
        let result = await userController.delete(id);
        let status = 'Usuario eliminado con exito';

        res.json({ status, result });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error' + error
        });
    };
});

module.exports = router;