const router = require('express').Router();
const userController = require('../controllers/user.controller');

/***
 * ENDPOINTS
 */

//register
router.post('/', async(req, res) => {
    try {
        if (req.body.isAdmin && (!req.user || !req.user.isAdmin)) {
            res.sendStatus(403);
            return;
        }

        let status = 'Usuario creado con exito';
        let newUser = await userController.create(req.body);

        res.json({ newUser, status });
    } catch (error) {
        res.status(500).json({
            message: error
        });
    };
});

//logIn
router.post('/login', async(req, res) => {
    try {
        let email = req.body.email;
        let password = req.body.password;
        let token = await userController.logIn(email, password);

        if (token) {
            res.json(token);
        } else {
            res.sendStatus(403);
        };
    } catch (error) {
        res.status(500).json({
            message: error
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
            message: error
        });
    };
});

//getID
router.get('/:id', async(req, res) => {
    try {
        res.json(await userController.getById(req.params.id));
    } catch (error) {
        res.status(500).json({
            message: error
        });
    };
});

//update
router.put('/:id', async(req, res) => {
    try {
        let id = req.params.id;

        if (!req.user.isAdmin && parseInt(id) !== req.user.id) {
            res.sendStatus(403);
            return;
        }

        let status = 'Usuario actualizado con exito';
        let result = await userController.update(req.body, id);

        res.json({ status, result });
    } catch (error) {
        res.status(500).json({
            message: error
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
            message: error
        });
    };
});

//delete
router.delete('/:id', async(req, res) => {
    try {
        let id = req.params.id;

        if (!req.user.isAdmin && parseInt(id) !== req.user.id) {
            res.sendStatus(403);
            return;
        }
        
        let result = await userController.delete(id);
        let status = 'Usuario eliminado con exito';

        res.json({ status, result });
    } catch (error) {
        res.status(500).json({
            message: error
        });
    };
});

module.exports = router;