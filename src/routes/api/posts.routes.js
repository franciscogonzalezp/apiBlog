const router = require('express').Router();

const { getByAutor, getById, getAll, create } = require('../../controllers/posts.controller');

router.get('', getAll)
router.get('/:postId', getById)
router.get('/autor/:autorId', getByAutor)

router.post('', create)


module.exports = router;