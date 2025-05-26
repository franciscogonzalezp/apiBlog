const Autor = require('../models/autores.model')
const checkAutorId = async (req, res, next) => {
    const { autorId } = req.method === 'GET' ? req.params : req.body

    if (!autorId) return res.status(400).json({ message: 'El id del autor no tiene valor' });
    if (isNaN(autorId)) return res.status(400).json({ message: 'El id del autor no es un número' });

    const autor = await Autor.selectById(autorId)
    if(!autor) return res.status(404).json({message: 'No existe ningún autor con el id introducido'});
    next()

}

module.exports = { checkAutorId }