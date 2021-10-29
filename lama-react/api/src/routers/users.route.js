const express =  require('express');
const router = express.Router();
const usersController = require('../app/controllers/UsersController');
const verify = require('../util/verifyToken');

router.get('/find/:id', verify, usersController.get_user);
router.get('/', verify, usersController.get_all_user);
router.put('/:id', verify, usersController.update_user);
router.delete('/:id', verify, usersController.delete_user);

module.exports = router;
