const express =  require('express');
const router = express.Router();
const listsController = require('../app/controllers/ListsController');
const verity = require('../util/verifyToken');

router.post('/',verity, listsController.create_list);
router.delete('/:id',verity, listsController.delete_list);
router.get('/',verity, listsController.get_all);


module.exports = router;
