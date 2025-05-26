const router = require('express').Router();

const { getByAutor, getById, getAll, create } = require('../../controllers/posts.controller');
const { checkAutorId } = require('../../middlewares/autores.middleware');

router.get('', getAll)
router.get('/autor/:autorId', checkAutorId, getByAutor)
router.get('/:postId', getById)

router.post('', checkAutorId, create)


module.exports = router;