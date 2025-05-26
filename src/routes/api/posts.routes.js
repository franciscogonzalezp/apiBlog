const router = require('express').Router();

const { getByAutor, getById, getAll, create, edit, remove } = require('../../controllers/posts.controller');
const { checkAutorId } = require('../../middlewares/autores.middleware');
const { checkPostId } = require('../../middlewares/posts.middleware');

router.get('', getAll)
router.get('/autor/:autorId', checkAutorId, getByAutor)
router.get('/:postId', checkPostId, getById)

router.post('', checkAutorId, create)

router.put('/:postId', checkPostId, edit)

router.delete('/:postId', checkPostId, remove)

module.exports = router;