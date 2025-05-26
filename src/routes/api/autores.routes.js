const router = require('express').Router();

const { getAll, getById, create } = require('../../controllers/autores.controller');
const { checkAutorId } = require('../../middlewares/autores.middleware');

router.get('', getAll)
router.get('/:autorId', checkAutorId, getById)

router.post('', create)

module.exports = router;