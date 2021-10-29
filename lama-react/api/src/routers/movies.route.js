const express =  require('express');
const { verify } = require('jsonwebtoken');
const router = express.Router();
const moviesController = require('../app/controllers/MoviesController');
const verity = require('../util/verifyToken');


router.post('/',verity, moviesController.create_movie);
router.put('/:id', verity, moviesController.update_movie);
router.delete('/:id',verity, moviesController.delete_movie);
router.get('/find/:id',verity, moviesController.get_movie);
router.get('/random',verity, moviesController.random_movie);
router.get('/', verify, moviesController.get_all);

module.exports = router;