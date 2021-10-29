const express =  require('express');
const router = express.Router();
const authsController = require('../app/controllers/AuthController');

router.post('/login', authsController.login);
router.post('/register', authsController.register);
router.get('/', authsController.index);

module.exports = router;